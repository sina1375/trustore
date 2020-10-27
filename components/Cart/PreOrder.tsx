import React from "react";
import NumberFormat from "react-number-format";
import { Container, Row, Col } from "reactstrap";
import { CartView } from "../../interfaces/cartView";
import Button from "../Common/Button";

interface Props {
    cartItems: CartView[],
}

export default function PreOrder(props: Props) {
    const sumPrices = props.cartItems.reduce((a, b) => a + b.productView.price, 0);
    const sumOrginalPrices = props.cartItems.reduce((a, b) => a + b.productView.orginalPrice, 0);

    return <Container>
        <Row className="split-bottom pb-3 mb-3">
            <Col className="cart-pre-order-title" xs={12}>
                پیش فاکتور شما
            </Col>
        </Row>
        <Row className="split-bottom pb-3 mb-3">
            <Col xs="auto">
                <span className="cart-pre-order-title h-100 d-flex align-items-center">کد تخفیف</span>
            </Col>
            <Col>
                <input className="dark" />
            </Col>
            <Col xs="auto">
                <Button className="h-100" type="primary" onClick={() => alert("ok")}>
                    اعمال
                </Button>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={6}>
                <span className="cart-pre-order-title h-100 d-flex align-items-center">جمع مبلغ محصولات</span>
            </Col>
            <Col xs={6}>
                <span className="cart-pre-order-price"><NumberFormat value={sumOrginalPrices} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 symbol">تومان</span>
            </Col>
        </Row>
        <Row className="split-bottom pb-3 mb-3">
            <Col xs={6}>
                <span className="cart-pre-order-discount h-100 d-flex align-items-center">مجموع تخفیفات</span>
            </Col>
            <Col xs={6}>
                <span className="cart-pre-order-price-discount"><NumberFormat value={sumOrginalPrices - sumPrices} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 cart-pre-order-price-discount-symbol">تومان</span>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={6}>
                <span className="cart-pre-order-title h-100 d-flex align-items-center">مجموع</span>
            </Col>
            <Col xs={6}>
                <span className="cart-pre-order-price"><NumberFormat value={sumPrices} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 symbol">تومان</span>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={12}>
                <Button withoutPadding={true} className="p-3" onClick={() => alert('ok')} type="primary">
                    تکمیل و پرداخت
                </Button>
            </Col>
        </Row>
    </Container>
}