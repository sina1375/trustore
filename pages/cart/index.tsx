import React from "react";
import { Col, Container, Row } from "reactstrap";
import useSWR from "swr";
import CartItem from "../../components/Cart/CartItem";
import PreOrder from "../../components/Cart/PreOrder";
import Spiner from "../../components/Common/Spiner";
import Layout from "../../components/Layout/Layout";
import { getDataFetcher } from "../../helper/contans";
import { CartView } from "../../interfaces/cartView";

export default function Cart() {
    const fetcher = (url: RequestInfo) => getDataFetcher(url.toString()).then(res => res.json());
    const { data, error } = useSWR('/cart/GetAllCartItems', fetcher);

    if (error) {
        return <div>خطا</div>
    }
    else if (!data) {
        return <Layout title="سبد خرید">
            <Spiner />
        </Layout>
    }
    else {
        const cartItems = (data as CartView[]);

        return <Layout title="سبد خرید">
            <Container fluid={true} className="cart-container pt-3 pb-3">
                <Row>
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <Row>
                                    <Col xs={12}>
                                        {cartItems.map(cartItem =>
                                            <CartItem cartItem={cartItem} />
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="cart-pre-order-container p-3" xs={4}>
                                <PreOrder cartItems={cartItems} />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Layout>
    }
}