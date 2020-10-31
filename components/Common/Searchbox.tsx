import { Container, Row, Col } from "reactstrap";
import MagnifyingGlass from "../../icons/magnifying-glass";

export default function SearchBox() {
    return <Container fluid={true} className="search-box h-100 pt-2 pr-2 pl-2 pb-2 pr-sm-3 pl-sm-3">
        <Row className="h-100">
            <Col xs="auto" className="d-flex align-items-center pl-2 pl-sm-3">
                <MagnifyingGlass />
            </Col>
            <Col className="pr-0 pr-sm-3">
                <input className="search-box-input" placeholder="کالای مورد نظر را جستجو کنید..." />
            </Col>
        </Row>
    </Container>
}