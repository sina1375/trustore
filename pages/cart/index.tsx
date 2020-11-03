import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CartItem from "../../components/Cart/CartItem";
import PreOrder from "../../components/Cart/PreOrder";
import Spiner from "../../components/Common/Spiner";
import Layout from "../../components/Layout/Layout";
import { CartContext } from "../../contexts/cartContext";
import { postDataFetcher } from "../../helper/contans";
import { ProductView } from "../../interfaces/productView";

export default function Cart() {
    const cartContext = useContext(CartContext);

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductView[]>([]);

    useEffect(() => {
        postDataFetcher('/product/GetProducts', cartContext.cartItems.map(c => c.productID))
            .then(res => res.json())
            .then(json => {
                const _products: ProductView[] = json;

                setProducts(_products);
                setLoading(false);
            });
    }, [])


    if (loading) {
        return <Layout title="سبد خرید">
            <Spiner />
        </Layout>
    }
    else {
        return <Layout title="سبد خرید">
            <Container fluid={true} className="cart-container pt-3 pb-3">
                <Row>
                    <Container>
                        <Row>
                            <Col xs={12} sm={8} className="mb-2 mb-sm-3">
                                <Row>
                                    <Col xs={12}>
                                        {cartContext.cartItems.map(cartItem =>
                                            <CartItem cartItem={cartItem} product={products.find(i => cartItem.productID === i.id)} />
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={4}>
                                <PreOrder products={products} />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Layout>
    }
}