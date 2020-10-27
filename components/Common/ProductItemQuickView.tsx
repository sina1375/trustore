import Link from "next/link";
import React from "react";
import NumberFormat from "react-number-format";
import { Container, Row, Col } from "reactstrap";
import Delivery from "../../icons/delivery";
import Hours from "../../icons/hours";
import SaveMoney from "../../icons/save-money";
import { ProductView } from "../../interfaces/productView";
import AddToBasket from "./AddToBasketButton";
import LazyLoadingImage from "./LazyLoadingImage";

interface Props {
    product: ProductView
}

export default function ProductItemQuickView(props: Props) {
    const starCount = Number(props.product.rate.toFixed(0));

    return <Container>
        <Row>
            <Col xs={9} className="pt-4 pb-4">
                <Row>
                    <Col xs={4}>
                        <LazyLoadingImage alt={props.product.fullTitle} className="w-100 h-100" src={props.product.thumbnailImagePath} />
                    </Col>
                    <Col xs={8} className="split-right">
                        <Row className="mb-3">
                            <Col xs={12} className="product-title">
                                {props.product.fullTitle}
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={12} className="product-rate">
                                <span className={"fa fa-star pl-1 ic-star" + (starCount >= 1 ? " checked" : "")}></span>
                                <span className={"fa fa-star pl-1 ic-star" + (starCount >= 2 ? " checked" : "")}></span>
                                <span className={"fa fa-star pl-1 ic-star" + (starCount >= 3 ? " checked" : "")}></span>
                                <span className={"fa fa-star pl-1 ic-star" + (starCount >= 4 ? " checked" : "")}></span>
                                <span className={"fa fa-star pl-1 ic-star" + (starCount >= 5 ? " checked" : "")}></span>
                                <span>{" " + props.product.rate + " - "}</span>
                                <span className="fa fa-user"></span>
                                <span className="pl-3">{" " + props.product.ratedUsersCount}</span>
                                <Link href="#comments">نظرات کاربران</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="pl-5">
                                <Row className="mb-2">
                                    <Col xs={12} className="product-property-title">
                                        ویژگی‌های محصول
                                    </Col>
                                </Row>
                                <Row className="text-right">
                                    {props.product.mainProperties.map((property) =>
                                        (property.type === 1) ?
                                            <Col xs={6}>
                                                <div className="float-right">
                                                    <span className="fa fa-circle product-property-circle"></span>
                                                    <span className="product-property-item">{" " + property.title}:</span>
                                                </div>
                                                {property.values.map((value) =>
                                                    <div className="mr-2 float-right color-box" style={{ backgroundColor: "#" + value.value }}></div>
                                                )}
                                            </Col>
                                            :
                                            <Col xs={6}>
                                                <span className="fa fa-circle product-property-circle"></span>
                                                <span className="product-property-item">{" " + property.title}:{" " + property.values.map((value) => value.value).join(" / ")}</span>
                                            </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={3} className="product-item-quick-view-left-container split-right pt-5">
                {props.product.price === 0 ?
                    <Row className="mb-5">
                        <Col className="product-unavailable">
                            ناموجود
                        </Col>
                    </Row>
                    :
                    <React.Fragment>
                        <Row>
                            <Col xs={12} className="product-item-quick-view-price">
                                <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col xs={12} style={{ visibility: (props.product.price !== props.product.orginalPrice) ? "visible" : "hidden" }} className="product-item-quick-view-price-discount">
                                <NumberFormat value={props.product.orginalPrice} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                            </Col>
                        </Row>
                    </React.Fragment>
                }
                <Row className="mb-5">
                    <Col xs={6}>
                        {props.product.price !== 0 &&
                            <AddToBasket selectablePropertyValuesIDs={[]} productID={props.product.id} count={1} type="quick" />
                        }
                    </Col>
                    <Col xs={6} className="pr-0">
                        <div className="product-item-quick-view-show-detail-button d-flex align-items-center h-100">
                            <Link href="/products/[id]" as={"/products/" + props.product.id}>
                                <a className="text-center w-100">
                                    جزئیات کامل محصول
                                </a>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col xs={3} className="d-flex align-items-center justify-content-center">
                        <SaveMoney className="product-item-quick-view-services-ic" />
                    </Col>
                    <Col className="product-item-quick-view-services-title d-flex align-items-center">
                        ضمانت بازگشت پول
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col xs={3} className="d-flex align-items-center justify-content-center">
                        <Hours className="product-item-quick-view-services-ic" />
                    </Col>
                    <Col className="product-item-quick-view-services-title d-flex align-items-center">
                        پشتیبانی در هر زمان
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={3} className="d-flex align-items-center justify-content-center">
                        <Delivery className="product-item-quick-view-services-ic-delivery" />
                    </Col>
                    <Col className="product-item-quick-view-services-title d-flex align-items-center">
                        ارسال رایگان
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}