import { Container, Col, Row } from "reactstrap";

interface Props {
    counter: number,
    setCounter: (count: number) => void,
}

export default function CounterSelector(props: Props) {
    return <Container className="counter-selector">
        <Row className="h-100">
            <Col>
                <input className="counter-selector-input" value={props.counter} type="Number" onChange={e => e.target.value === "0" ? props.setCounter(1) : props.setCounter(Number(e.target.value))} />
            </Col>
            <Col className="counter-selector-buttons split-right d-none d-sm-block" xs="auto">
                <Row className="counter-selector-button">
                    <Col xs={12} className="d-flex align-items-center" onClick={() => props.setCounter(props.counter + 1)}>
                        <i className="fa fa-angle-up"></i>
                    </Col>
                </Row>
                <Row className="counter-selector-button">
                    <Col xs={12} className="d-flex align-items-center" onClick={() => props.setCounter(props.counter > 1 ? props.counter - 1 : 1)}>
                        <i className="fa fa-angle-down"></i>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}