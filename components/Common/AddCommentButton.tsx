import { MdChatBubbleOutline } from "react-icons/md";
import { Container, Col, Row } from "reactstrap";

interface Props {
    onClick: () => void,
}

export default function AddCommentButton(props: Props) {
    return <Container onClick={props.onClick} className="add-comment-button h-100">
        <Row className="h-100 pt-2 pb-2">
            <Col className="d-flex align-items-center pl-0">
                <MdChatBubbleOutline color="#FFFFFF" size="16px" />
            </Col>
            <Col xs="auto" className="d-flex align-items-center add-comment-button-title">
                ثبت نظر جدید
            </Col>
        </Row>
    </Container>
}