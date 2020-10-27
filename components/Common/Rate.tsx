import { Container, Row, Col } from "reactstrap";
import { useState } from "react";

export default function Rate() {
    const [starCount, setStarCount] = useState(0);

    return <Container className="rate-container">
        <Row>
            <Col className="p-0" onClick={() => setStarCount(1)}>
                <div className="rate-box d-flex align-items-center justify-content-center">
                    <span className={"fa fa-star ic-star" + (starCount >= 1 ? " checked" : "")}></span>
                </div>
            </Col>
            <Col className="p-0" onClick={() => setStarCount(2)}>
                <div className="rate-box d-flex align-items-center justify-content-center">
                    <span className={"fa fa-star ic-star" + (starCount >= 2 ? " checked" : "")}></span>
                </div>
            </Col>
            <Col className="p-0" onClick={() => setStarCount(3)}>
                <div className="rate-box d-flex align-items-center justify-content-center">
                    <span className={"fa fa-star ic-star" + (starCount >= 3 ? " checked" : "")}></span>
                </div>
            </Col>
            <Col className="p-0" onClick={() => setStarCount(4)}>
                <div className="rate-box d-flex align-items-center justify-content-center">
                    <span className={"fa fa-star ic-star" + (starCount >= 4 ? " checked" : "")}></span>
                </div>
            </Col>
            <Col className="p-0" onClick={() => setStarCount(5)}>
                <div className="rate-box d-flex align-items-center justify-content-center">
                    <span className={"fa fa-star ic-star" + (starCount >= 5 ? " checked" : "")}></span>
                </div>
            </Col>
        </Row>
    </Container>
}