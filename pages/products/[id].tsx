import { GetServerSideProps } from "next"
import Layout from "../../components/Layout/Layout"
import { ProductView } from "../../interfaces/productView"
import { Container, Row, Col } from "reactstrap"
import ProductContainer from "../../components/Product/ProductContainer"
import Services from "../../components/Common/Services"
import ProductContainerDetails from "../../components/Product/ProductContanerDetails"
import { ProductSetVisitorFromBody } from "../../interfaces/productSetVisitorFromBody"
import { useEffect } from "react"
import { getDataFetcher, postDataFetcher } from "../../helper/contans"

type Props = {
	product?: ProductView
	errors?: string,
}

export default function Product(props: Props) {

	function setVisitor() {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		fetch("https://extreme-ip-lookup.com/json")
			.then(res => res.json())
			.then(json => json.query)
			.then(ip => {
				if (props.product) {
					const productSetVisitorFromBody: ProductSetVisitorFromBody = {
						productID: props.product.id,
						ip: ip,
					}
					postDataFetcher('/product/SetVisitor', productSetVisitorFromBody);
				}
			});
	}

	useEffect(setVisitor, []);

	if (props.errors) {
		return (
			<Layout title="خطا">
				<Container fluid={true}>
					<p>
						<span style={{ color: 'red' }}>خطا:</span> {props.errors}
					</p>
				</Container>
			</Layout>
		)
	}

	return (
		<Layout title={props.product?.fullTitle.toString()}>
			{props.product &&
				<Container fluid={true} className="product-container">
					<Row className="mb-4">
						<Col xs={12}>
							<ProductContainer product={props.product} />
						</Col>
					</Row>
					<Row className="mb-4">
						<Col xs={12}>
							<Services />
						</Col>
					</Row>
					<Row className="mb-4">
						<Col xs={12}>
							<ProductContainerDetails productID={props.product.id} type="comment" />
						</Col>
					</Row>
				</Container>
			}
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		const res = await getDataFetcher('/product/GetProduct?productID=' + params?.id);
		const product: ProductView = await res.json();

		return { props: { product } }
	} catch (err) {
		return { props: { errors: err.message } }
	}
}