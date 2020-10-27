import { Container, Row, Col } from "reactstrap";
import MagnifyingGlass from "../../icons/magnifying-glass";

export default function SearchBox() {
    return <Container fluid={true} className="search-box h-100">
        <Row className="h-100">
            <Col xs="auto" className="d-flex align-items-center">
                <MagnifyingGlass />
            </Col>
            <Col>
                <input className="search-box-input" placeholder="کالای مورد نظر را جستجو کنید..." />
            </Col>
        </Row>
    </Container>
}