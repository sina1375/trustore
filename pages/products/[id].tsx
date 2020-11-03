import { GetServerSideProps } from "next"
import Layout from "../../components/Layout/Layout"
import { ProductView } from "../../interfaces/productView"
import { Container, Row, Col } from "reactstrap"
import ProductContainer from "../../components/Product/ProductContainer"
import Services from "../../components/Common/Services"
import ProductContainerDetails from "../../components/Product/ProductContanerDetails"
import { ProductSetVisitorFromBody } from "../../interfaces/productSetVisitorFromBody"
import React, { useEffect, useState } from "react"
import { getDataFetcher, postDataFetcher } from "../../helper/contans"
import ProductListViewer from "../../components/Common/ProductListViewer"
import Spiner from "../../components/Common/Spiner"

type Props = {
	product?: ProductView
	errors?: string,
}

export default function Product(props: Props) {

	const [relatedProducts, setRelatedProducts] = useState<ProductView[]>();

	function setVisitor() {
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

	useEffect(() => {
		setVisitor();
		getRelatedProduct();
	}, [props.product]);

	function getRelatedProduct() {
		if (props.product) {
			getDataFetcher('/product/GetRelatedProducts?productID=' + props.product.id)
				.then(res => res.json())
				.then(json => {
					const _relatedProducts: ProductView[] = json;
					setRelatedProducts(_relatedProducts);
				});
		}
	}

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
					<Row className="mb-4 d-none d-sm-block">
						<Col xs={12}>
							<Services />
						</Col>
					</Row>
					<Row className="pb-4">
						<Col xs={12} className={relatedProducts?"":"p-5"}>
							{relatedProducts ?
								<ProductListViewer title="محصولات مرتبط" products={relatedProducts} />
								:
								<Spiner />
							}
						</Col>
					</Row>
					<Row className="pb-4">
						<Col xs={12}>
							<ProductContainerDetails productID={props.product.id} type="detail" />
						</Col>
					</Row>
					<Row className="mb-4 d-block d-sm-none">
						<Col xs={12}>
							<Services />
						</Col>
					</Row>
				</Container>
			}
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const res = await getDataFetcher('/product/GetProduct?productID=' + params?.id);
		const product: ProductView = await res.json();

		return { props: { product } }
	} catch (err) {
		return { props: { errors: err.message } }
	}
}