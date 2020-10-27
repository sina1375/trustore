import { Container, Row } from "reactstrap";
import { useSpring, animated } from 'react-spring'
import { useState, useEffect } from "react";
import React from "react";
import ProductDetails from "./ProductDetails";
import useMeasure from 'react-use-measure'
import { MdComment } from "react-icons/md";
import ProductComments from "./ProductComments";

interface Props {
    productID: number,
    type: "detail" | "comment"
}

export default function ProductContainerDetails({ productID, type = "detail" }: Props) {
    const [detailContentRef, detailContentBounds] = useMeasure();
    const [productTypeDetailRef, productTypeDetailBounds] = useMeasure();
    const [productTypeCommentRef, productTypeCommentBounds] = useMeasure();

    const [selectedType, setType] = useState(type);
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
    const [isOpenDetail, setOpenDetail] = useState(false);

    const overlayProps = useSpring({
        left: left + "px",
        width: width + "px",
    });

    const detailsHeightProps = useSpring({
        height: isOpenDetail ? (detailContentBounds.height + 48) + "px" : "379px",
    });

    const detailsDisplayProps = useSpring({
        opacity: isOpenDetail ? 0 : 1,
    });

    useEffect(() => {
        if (selectedType === "detail") {
            setLeft(productTypeDetailBounds.left);
            setWidth(productTypeDetailBounds.width);
        } else if (selectedType === "comment") {
            setLeft(productTypeCommentBounds.left);
            setWidth(productTypeCommentBounds.width);
        }
    }, [selectedType, productTypeDetailBounds, productTypeCommentBounds]);

    return <Container id="product-detail-container" className="container product-detail-container">
        <Row className="split-bottom p-4">
            <animated.div style={overlayProps} className="tab-type-overlay" />
            <div ref={productTypeDetailRef} onClick={() => setType("detail")} className={"col-auto tab-type-title" + (selectedType === "detail" ? " active" : "")}>
                مشخصات محصول
            </div>
            <div ref={productTypeCommentRef} onClick={() => setType("comment")} className={"col-auto tab-type-title" + (selectedType === "comment" ? " active" : "")}>
                <MdComment size="20px" /> نظرات کابران
            </div>
        </Row>
        <animated.div style={detailsHeightProps} className="row p-4">
            <div onLoad={() => alert(productTypeCommentBounds.left)} className="col-12" ref={detailContentRef}>
                {selectedType === "detail" ?
                    <ProductDetails productID={productID} />
                    :
                    <ProductComments />
                }
            </div>
        </animated.div>
        <animated.div style={detailsDisplayProps} className="row product-detail-more" onClick={() => setOpenDetail(!isOpenDetail)} />
    </Container>
}