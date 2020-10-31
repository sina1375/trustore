import { ProductView } from "../../interfaces/productView";
import { Col, Row } from "reactstrap";
import Link from "next/link";
import React from "react";

interface Props {
    product: ProductView,
}

export default function ProductHeader(props: Props) {
    const starCount = Number(props.product.rate.toFixed(0));

    return <React.Fragment>
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
    </React.Fragment>
}