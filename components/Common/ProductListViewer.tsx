import React, { useRef } from "react";
import { config, useSpring } from "react-spring";
import { Container, Col, Row } from "reactstrap";
import { ProductView } from "../../interfaces/productView";
import ProductListViewerItem from "./ProductListViewerItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    products: ProductView[],
    title: string,
}

export default function ProductListViewer(propsProductListViewer: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setScrolLeft] = useSpring(() => ({
        immediate: false,
        x: 0,
        onFrame: (props: { x: number; }) => {
            containerRef.current?.scroll(props.x, 0);
        },
        config: config.slow,
    }));

    return <Container>
                <Row className="mb-4">
                    <Col xs={12} className="split-bottom">
                        <Row>
                            <Col className="product-list-viewer-title d-flex align-items-center">
                                {propsProductListViewer.title}
                            </Col>
                            <Col className="pl-0 pb-2 pt-2 pr-2" onClick={() => setScrolLeft({ x: containerRef.current ? containerRef.current.scrollLeft + 200 : 0 })} xs="auto">
                                <Container className="product-list-viewer-scroll-button">
                                    <Row>
                                        <Col className="pr-1 pl-1 pb-2 pt-2 d-flex align-items-center justify-content-center" xs={12}>
                                            <FaChevronRight fontSize="10px" color="#a2a2a2" />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="pl-0 pb-2 pt-2 pr-2" onClick={() => setScrolLeft({ x: containerRef.current ? containerRef.current.scrollLeft - 200 : 0 })} xs="auto">
                                <Container className="product-list-viewer-scroll-button">
                                    <Row>
                                        <Col className="pr-1 pl-1 pb-2 pt-2 d-flex align-items-center justify-content-center" xs={12}>
                                            <FaChevronLeft fontSize="10px" color="#a2a2a2" />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div ref={containerRef} className="row d-flex flex-nowrap overflow-hidden">
                    {propsProductListViewer.products.map(product =>
                        <ProductListViewerItem product={product} />
                    )}
                </div>
            </Container>
}