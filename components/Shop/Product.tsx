import Link from "next/link";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { Col, Container, Row } from "reactstrap";
import { ProductView } from "../../interfaces/productView";
import AddToBasket from "../Common/AddToBasketButton";
import LazyLoadingImage from "../Common/LazyLoadingImage";
import ProductItemHover from "../Common/ProductItemHover";
// import SimpleAddToBasketButton from "../Common/SimpleAddToBasketButton";

interface Props {
    product: ProductView
}

export default function Product(props: Props) {
    const [isHover, setHover] = useState(false);

    return <Container className="product-shop-container pb-3" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Row>
            <Col xs={12} className="p-0">
                <LazyLoadingImage alt={props.product.fullTitle} className="product-shop-img p-2" src={props.product.thumbnailImagePath} />
                <ProductItemHover isHover={isHover} product={props.product} />
            </Col>
        </Row>
        <Link href="/products/[id]" as={"/products/" + props.product.id}>
            <a>
                <Row className="mb-2">
                    <Col xs={12} className="product-shop-title">
                        <div className="split-bottom split-top pb-2 pt-2 h-100">{props.product.fullTitle}</div>
                    </Col>
                </Row>
            </a>
        </Link>
        <Row>
            <Col xs={12}>
                {props.product.price === 0 ?
                    <div className="product-unavailable">
                        ناموجود
                    </div>
                    :
                    <React.Fragment>
                        <Row>
                            <Col xs={12} style={{ visibility: (props.product.price !== props.product.orginalPrice) ? "visible" : "hidden" }} className="product-shop-price-discount">
                                <NumberFormat value={props.product.orginalPrice} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="auto">
                                <AddToBasket type="simple" count={1} productID={props.product.id} selectablePropertyValuesIDs={[]} />
                            </Col>
                            <Col xs="auto" className="product-shop-price mr-auto">
                                <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                            </Col>
                        </Row>
                    </React.Fragment>
                }
            </Col>
        </Row>
    </Container>
}