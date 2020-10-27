import React from "react";
import NumberFormat from "react-number-format";
import { Col, Container, Row } from "reactstrap";
import { CartView } from "../../interfaces/cartView";
import CounterSelector from "../Common/CounterSelector";
import LazyLoadingImage from "../Common/LazyLoadingImage";

interface Props {
    cartItem: CartView,
}
export default function CartItem(props: Props) {
    return <Container className="cart-item-container p-3">
        <Row>
            <Col xs="auto">
                <LazyLoadingImage alt={props.cartItem.productView.fullTitle} className="cart-item-img" src={props.cartItem.productView.thumbnailImagePath} />
            </Col>
            <Col className="d-flex align-items-center">
                <span className="cart-item-title">{props.cartItem.productView.fullTitle}</span>
            </Col>
            <Col xs="auto" className="pl-0 pr-4 d-flex align-items-center counter-selector-title">
                تعداد
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
                <CounterSelector counter={props.cartItem.count} setCounter={() => alert("setCount")} />
            </Col>
            <Col xs="auto" className="d-flex align-items-center split-right">
                <span className="cart-item-price"><NumberFormat value={props.cartItem.productView.price} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 symbol">تومان</span>
            </Col>
        </Row>
    </Container>
}