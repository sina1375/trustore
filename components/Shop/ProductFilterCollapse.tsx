import { useState } from "react";
import { Col, Collapse, Container, Row } from "reactstrap";
import { FaAngleUp } from "react-icons/fa";
import { animated, useSpring } from "react-spring";


interface Props {
    defaultOpen: boolean,
    title: string,
    children: any,
}

export default function ProductFilterCollapse(props: Props) {
    const [isOpen, setOpen] = useState(props.defaultOpen);
    const collapseSpring = useSpring({ transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)' })

    return <Container>
        <Row onClick={() => setOpen(!isOpen)} className="product-filter-collapse-header pb-3 split-bottom mb-3">
            <Col className="product-filter-collapse-title">
                {props.title}
            </Col>
            <Col xs="auto" className="pl-0">
                <animated.div style={collapseSpring}>
                    <FaAngleUp fontSize="18px" color="#999999" />
                </animated.div>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Collapse isOpen={isOpen}>
                    {props.children}
                </Collapse>
            </Col>
        </Row>
    </Container>
}