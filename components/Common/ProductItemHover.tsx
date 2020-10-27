import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { IoMdShare, IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { animated, useSpring } from "react-spring";
import Popup from "./Popup";
import { ProductView } from "../../interfaces/productView";
import ProductItemQuickView from "./ProductItemQuickView";

interface Props {
    product: ProductView,
    isHover: boolean,
}

export default function ProductItemHover(props: Props) {
    const [isOpen, setOpen] = useState(false);

    const springHover = useSpring({
        opacity: props.isHover ? 1 : 0,
    });

    return <React.Fragment>
        <animated.div style={springHover} className="product-item-hover d-flex align-items-center justify-content-center">
            <div className="product-item-hover-container p-2">
                <Row>
                    <Col xs="auto" className="pr-3 pl-2 product-item-hover-title" onClick={() => setOpen(true)}>
                        <BsFillEyeFill color="#33ceae" fontSize="18px" /><span className="mr-2">مشاهده سریع</span>
                    </Col>
                    <Col xs="auto" className="pl-2 pr-2 split-right">
                        <Link href="/like">
                            <a>
                                <IoMdHeartEmpty fontSize="18px" />
                            </a>
                        </Link>
                    </Col>
                    <Col xs="auto" className="pr-0">
                        <Link href="/share">
                            <a>
                                <IoMdShare fontSize="18px" />
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>
        </animated.div>
        <Popup setOpen={setOpen} isOpen={isOpen} className="container p-0">
            <ProductItemQuickView product={props.product} />
        </Popup>
    </React.Fragment>
}