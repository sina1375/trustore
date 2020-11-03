import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Container, Row, Col, Collapse } from "reactstrap";
import { CategoryView } from "../../interfaces/categoryView";
import { FaAngleUp } from "react-icons/fa";
import ProductsDigital from "../../icons/products-digital";
import Link from "next/link";

interface Props {
    category: CategoryView,
    isOpen: boolean,

    onSelect: (id: number) => void,
}

export default function MenuMobileItem(props: Props) {
    const [isOpen, setOpen] = useState(props.isOpen);
    const collapseSpring = useSpring({ transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)' })

    useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen])

    function toggleOpen() {
        if (!isOpen) {
            props.onSelect(props.category.id);
        }
        setOpen(!isOpen);
    }

    return <Container>
        <Row onClick={() => toggleOpen()} className={"menu-category-item split-bottom" + (isOpen ? " selected" : "")}>
            <Col xs="auto" className="d-flex align-items-center">
                <ProductsDigital />
            </Col>
            <Col className="p-3">
                {props.category.faName}
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
                <animated.div style={collapseSpring}>
                    <FaAngleUp fontSize="14px" color="#a2a2a2" />
                </animated.div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="menu-category-kind-container">
                <Collapse isOpen={isOpen}>
                    {props.category.categoryKinds.map((categoryKind, index) =>
                        <Col xs={12}>
                            <Link href={"/shop?parent=" + categoryKind.id} as={"/shop?parent=" + categoryKind.id}>
                                <a>
                                    <Row className={"menu-category-kind-header mt-4" + (index === props.category.categoryKinds.length - 1 ? " mb-4" : "")}>
                                        <Col xs={12}>
                                            {categoryKind.name}
                                        </Col>
                                    </Row>
                                </a>
                            </Link>
                            {categoryKind.childs &&
                                categoryKind.childs.map(child =>
                                    <Link href={"/shop?categoryKind=" + child.id + "&parent=" + categoryKind.id} as={"/shop?categoryKind=" + child.id + "&parent=" + categoryKind.id}>
                                        <a>
                                            <Row className="menu-category-kind-child mt-2 mr-1 ml-1">
                                                <Col xs={12}>
                                                    {child.name}
                                                </Col>
                                            </Row>
                                        </a>
                                    </Link>
                                )
                            }
                        </Col>
                    )}
                </Collapse>
            </Col>
        </Row>
    </Container >
}