import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Container, Row, Col } from "reactstrap";
import { LightSpiner } from "./Spiner";

interface Props {
    onClick: () => void | Promise<void>,
    withoutPadding?: boolean,
    className?: string,
    type: "primary" | "secondary" | "secondary2" | "empty",
    children: any,
}

export default function Button(props: Props) {
    const [loading, setLoading] = useState(false);

    const springChildren = useSpring({
        opacity: loading ? 0 : 1,
    });
    const springLoading = useSpring({
        opacity: loading ? 1 : 0,
    });

    function onClick() {
        setLoading(true);
        setTimeout(async () => {
            await props.onClick();
            setLoading(false);
        }, 2000);
    }

    return <Container onClick={onClick} className={(props.type === "primary" ? "button" : props.type === "secondary" ? "button-secondary" : props.type === "secondary2" ? "button-secondary-2" : "button-empty") + (props.withoutPadding ? " " : " pr-4 pl-4 pt-1 pb-1 ") + (props.className && " " + props.className)}>
        <Row className="h-100">
            <Col xs={12}>
                <animated.span className="h-100" style={springLoading}>{loading && <LightSpiner type={(props.type === "primary" || props.type === "secondary2") ? "secondary" : "primary"} />}</animated.span>
                <animated.div className="d-flex align-items-center justify-content-center h-100" style={springChildren}>{props.children}</animated.div>
            </Col>
        </Row>
    </Container>
}