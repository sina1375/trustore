import { TitleID } from "../../interfaces/titleID";
import { Col, Row } from "reactstrap";

interface Props {
    items: TitleID[],

    selectedID?: number,
    setSelectedID?: (id: number) => void,
}

export default function DropDown(props: Props) {
    return <Row className="drop-down-select">
        <Col xs={12}>
            <select>
                {props.items.map((item) =>
                    <option selected={item.ID === props.selectedID}>{item.title}</option>
                )}
            </select>
        </Col>
    </Row>
}