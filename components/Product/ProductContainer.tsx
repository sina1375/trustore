import { ProductView } from "../../interfaces/productView";
import { Container, Col, Row } from "reactstrap";
import LazyLoadingImage from "../Common/LazyLoadingImage";
import Link from "next/link";
import React, { useState } from "react";
import CounterSelector from "../Common/CounterSelector";
import AddToBasket from "../Common/AddToBasketButton";
import NumberFormat from 'react-number-format';
import ColorSelector from "../Common/ColorSelector";
import { TitleID } from "../../interfaces/titleID";
import DropDown from "../Common/DropDown";
import { IoMdShare, IoMdHeartEmpty } from "react-icons/io";

interface Props {
    product: ProductView
}

export default function ProductContainer(props: Props) {
    const [counter, setCounter] = useState(1);
    const [selectedImage, setSelectedImage] = useState(props.product.imagePaths[0]);
    const starCount = Number(props.product.rate.toFixed(0));

    return <Container>
        <Row>
            <Col xs={12}>
                sitemap
                </Col>
        </Row>
        <Row>
            <Col xs={12} className="product-box p-4">
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={4} className="pr-5 pl-5">
                                <Row className="mb-4">
                                    <Col xs={12} className="d-flex justify-content-center">
                                        <LazyLoadingImage alt={props.product.fullTitle} className="product-main-image" src={selectedImage} />
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    {props.product.imagePaths.map((image) =>
                                        <Col xs="auto">
                                            <img alt={props.product.fullTitle} className="product-image" src={image} onClick={() => setSelectedImage(image)} />
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            <Col xs={8} className="split-right pr-5 pl-5">
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
                                    <Col xs={6} className="pl-5">
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
                                    <Col xs={6} className="split-right pr-5">
                                        {props.product.selectableProperties.map((selectableProperty) =>
                                            <Row className="mb-2">
                                                <Col xs={2} className="product-selectable-property-title">
                                                    {selectableProperty.title}:
                                                    </Col>
                                                <Col xs={10}>
                                                    {selectableProperty.type === 1 ?
                                                        <ColorSelector colors={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                                        :
                                                        <DropDown items={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                                    }
                                                </Col>
                                            </Row>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <div className="split-bottom p-3"></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="pr-5 pl-4 product-links d-flex align-items-center">
                        <Link href="/share">
                            <a>
                                <IoMdShare fontSize="24px" />
                            </a>
                        </Link>
                    </Col>
                    <Col xs="auto" className="pr-4 product-links d-flex align-items-center split-right">
                        <Link href="/like">
                            <a>
                                <IoMdHeartEmpty fontSize="24px" />
                            </a>
                        </Link>
                    </Col>
                    <Col>
                    </Col>
                    {props.product.price === 0 ?
                        <Col className="product-unavailable text-left">
                            ناموجود
                        </Col>
                        :
                        <React.Fragment>
                            <Col xs="auto">
                                <Row className={"d-flex align-items-center" + (props.product.price !== props.product.orginalPrice ? "" : " h-100")}>
                                    <Col xs={12} className="product-price">
                                        <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                                    </Col>
                                </Row>
                                {props.product.price !== props.product.orginalPrice ?
                                    <Row>
                                        <Col xs={12} className="product-price-discount">
                                            <NumberFormat value={props.product.orginalPrice} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                                        </Col>
                                    </Row> : <React.Fragment></React.Fragment>}
                            </Col>
                            <Col xs="auto" className="pl-0 pr-4 d-flex align-items-center counter-selector-title">
                                تعداد
                            </Col>
                            <Col xs="auto">
                                <CounterSelector counter={counter} setCounter={setCounter} />
                            </Col>
                            <Col xs="auto pr-0">
                                <AddToBasket type="normal" productID={props.product.id} count={counter} setCount={setCounter} selectablePropertyValuesIDs={[]} />
                            </Col>
                        </React.Fragment>
                    }
                </Row>
            </Col>
        </Row>
    </Container>
}