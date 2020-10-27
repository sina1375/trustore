import { Row, Col, Container } from "reactstrap";
import { useState } from "react";
import { TitleID } from "../../interfaces/titleID";

interface Props {
    colors: TitleID[],
}

export default function ColorSelector(props: Props) {
    const [selected, setSelected] = useState(props.colors[0].ID);
    return <Row>
        <Col xs={12}>
            <Container>
                <Row>
                    {props.colors.map(color =>
                        <Col xs="auto" className={"p-1 color-box-main" + (color.ID === selected ? " selected" : "")} onClick={() => setSelected(color.ID)}>
                            <div className="color-box" style={{ backgroundColor: "#" + color.title }}></div>
                        </Col>
                    )}
                </Row>
            </Container>
        </Col>
    </Row>
}