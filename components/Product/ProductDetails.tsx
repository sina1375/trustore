import useSWR from 'swr'
import { ProductProperyView } from "../../interfaces/productPropertyView"
import { Row, Col, Container } from 'reactstrap';
import Spiner from '../Common/Spiner';
import { getDataFetcher } from '../../helper/contans';

interface Props {
    productID: number,
}

export default function ProductDetails(props: Props) {

    const fetcher = (url: RequestInfo) => getDataFetcher(url.toString()).then(res => res.json());
    const { data, error } = useSWR('/product/GetProductDetails?productID=' + props.productID, fetcher);

    if (error) {
        return <div>خطا</div>
    }
    else if (!data) {
        return <Spiner></Spiner>
    }
    else {
        const properties = (data as ProductProperyView[]);
        return <Row>
            <Col xs={12}>
                {properties.map((property =>
                    <Row className="mb-2">
                        <Col xs={4} className="pl-0 pr-2">
                            <Container className="pr-5 pt-2 pb-2 product-detail-property">
                                {property.title}
                            </Container>
                        </Col>
                        <Col xs={8} className="pl-0 pr-2">
                            <Container className="pr-5 pt-2 pb-2 product-detail-property">
                                {property.values.map((value) => value.value).join(" / ")}
                            </Container>
                        </Col>
                    </Row>
                ))}
            </Col>
        </Row>
    }
}