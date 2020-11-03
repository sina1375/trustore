import React from "react";
import NumberFormat from "react-number-format";
import { Col, Container, Row } from "reactstrap";
import { CartView } from "../../interfaces/cartView";
import { ProductView } from "../../interfaces/productView";
import CounterSelector from "../Common/CounterSelector";
import LazyLoadingImage from "../Common/LazyLoadingImage";

interface Props {
    cartItem: CartView,
    product?: ProductView,
}

export default function CartItem(props: Props) {
    return <Container className="cart-item-container p-3">
        <Row>
            {props.product &&
                <React.Fragment>
                    <Col xs="auto" className="mb-3 mb-sm-0">
                        <LazyLoadingImage alt={props.product.fullTitle} className="cart-item-img" src={props.product.thumbnailImagePath} />
                    </Col>
                    <Col className="d-flex align-items-center mb-3 mb-sm-0">
                        <span className="cart-item-title">{props.product.fullTitle}</span>
                    </Col>
                    <Col xs={12} className="d-block d-sm-none mb-3">
                        <Container>
                            <Row>
                                <Col xs={12} className="split-bottom" />
                            </Row>
                        </Container>
                    </Col>
                    <Col xs="auto" className="pl-0 pr-4 d-flex align-items-center counter-selector-title">
                        تعداد
                    </Col>
                    <Col xs="auto" sm="auto" className="d-flex align-items-center ml-auto ml-sm-0">
                        <CounterSelector counter={props.cartItem.count} setCounter={() => alert("setCount")} />
                    </Col>
                    <Col xs={6} sm="auto" className="d-flex align-items-center split-right">
                        <span className="cart-item-price mr-auto mr-sm-0"><NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 symbol">تومان</span>
                    </Col>
                </React.Fragment>
            }
        </Row>
    </Container>
}