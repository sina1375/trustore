import React from "react";
import NumberFormat from "react-number-format";
import { Container, Row, Col } from "reactstrap";
import { ProductView } from "../../interfaces/productView";
import Button from "../Common/Button";

interface Props {
    products: ProductView[],
}

export default function PreOrder(props: Props) {
    const sumPrices = props.products.reduce((a, b) => a + b.price, 0);
    const sumOrginalPrices = props.products.reduce((a, b) => a + b.orginalPrice, 0);

    return <Container className="cart-pre-order-container p-3">
        <Row>
            <Col xs={12}>
                <Row>
                    <Col className="cart-pre-order-title" xs={12}>
                        <div className="split-bottom pb-3 mb-3">پیش فاکتور شما</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <span className="cart-pre-order-title h-100 d-flex align-items-center">کد تخفیف</span>
                    </Col>
                    <Col>
                        <input className="dark" />
                    </Col>
                    <Col xs="auto">
                        <Button withoutPadding={true} className="p-2 p-sm-3 h-100" type="primary" onClick={() => alert("ok")}>
                            اعمال
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="split-bottom pb-3 mb-3" />
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
                <Row>
                    <Col xs={6}>
                        <span className="cart-pre-order-discount h-100 d-flex align-items-center">مجموع تخفیفات</span>
                    </Col>
                    <Col xs={6}>
                        <span className="cart-pre-order-price-discount"><NumberFormat value={sumOrginalPrices - sumPrices} displayType={'text'} thousandSeparator={true} /></span><span className="pr-1 cart-pre-order-price-discount-symbol">تومان</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="split-bottom pb-3 mb-3" />
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
                        <Button withoutPadding={true} className="p-2 p-sm-3" onClick={() => alert('ok')} type="primary">
                            تکمیل و پرداخت
                                </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}