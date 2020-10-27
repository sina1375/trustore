import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function LoginCotainerForm() {
    type type = "Login" | "Register" | "ForgetPassword";

    const [contentBoundsRef, contentBounds] = useMeasure();
    const [typeLoginBoundsRef, typeLoginBounds] = useMeasure();
    const [typeRegisterBoundsRef, typeRegisterBounds] = useMeasure();

    const [selectedType, setType] = useState<type>("Login");
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const overlayProps = useSpring({
        left: left + "px",
        width: width + "px",
        top: "56px",
    });

    const containerProps = useSpring({
        height: height + "px",
    });

    useEffect(() => {
        if (selectedType === "Login") {
            setLeft(typeLoginBounds.left - contentBounds.left + 30);
            setWidth(typeLoginBounds.width);
        } else if (selectedType === "Register") {
            setLeft(typeRegisterBounds.left - contentBounds.left + 30);
            setWidth(typeRegisterBounds.width);
        }

        setHeight(contentBounds.height + 15);

    }, [selectedType, typeLoginBounds, typeRegisterBounds, contentBounds]);

    return <Container>
        <animated.div style={overlayProps} className="tab-type-overlay" />
        <Row className="split-bottom pb-3">
            <div ref={typeLoginBoundsRef} onClick={() => setType("Login")} className={"col-auto tab-type-title" + (selectedType === "Login" ? " active" : "")}>
                ورود
            </div>
            <div ref={typeRegisterBoundsRef} onClick={() => setType("Register")} className={"col-auto tab-type-title" + (selectedType === "Register" ? " active" : "")}>
                ثبت نام
            </div>
        </Row>
        <animated.div style={containerProps} className="row pt-3">
            <div className="col">
                {selectedType === "Login" &&
                    <LoginForm formRef={contentBoundsRef} />
                }
                {selectedType === "Register" &&
                    <SignupForm formRef={contentBoundsRef} />
                }
            </div>
        </animated.div>
    </Container>
}