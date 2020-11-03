import { ProductView } from "../../interfaces/productView";
import LazyLoadingImage from "./LazyLoadingImage";
import ProductItemHover from "./ProductItemHover";
import { Container, Col, Row } from "reactstrap";
import React, { useState } from "react";
import Link from "next/link";
import NumberFormat from "react-number-format";
import AddToBasket from "./AddToBasketButton";

interface Props {
    product: ProductView,
}

export default function ProductListViewerItem(props: Props) {
    const [isHover, setHover] = useState(false);

    return <Col xs={12} s={6} md={6} lg={4} xl={3} className="mb-5">
        <Container className="product-list-viewer-item-container">
            <Row onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseUp={() => setHover(false)}>
                <Col xs={12}>
                    <LazyLoadingImage alt={props.product.fullTitle} className="product-list-viewer-item-img p-2" src={props.product.thumbnailImagePath} />
                    <ProductItemHover isHover={isHover} product={props.product} />
                </Col>
            </Row>
            <Link href="/products/[id]" as={"/products/" + props.product.id}>
                <a>
                    <Row className="pb-2 pt-2">
                        <Col xs={12} className="product-list-viewer-item-title">
                            {props.product.fullTitle}
                        </Col>
                    </Row>
                </a>
            </Link>
            <Row className="pt-4 pb-1 split-bottom">
                <Col className="product-list-viewer-item-price-discount d-flex align-items-center justify-content-center" style={{ visibility: (props.product.price !== props.product.orginalPrice) ? "visible" : "hidden" }}>
                    <NumberFormat value={props.product.orginalPrice} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                </Col>
                <Col className="product-list-viewer-item-price" xs="auto">
                    <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="p-0">
                    <AddToBasket type="listViewer" count={1} productID={props.product.id} selectablePropertyValuesIDs={[]} />
                </Col>
            </Row>
        </Container>
    </Col>
}