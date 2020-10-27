import { Container, Row, Col } from "reactstrap";
import Delivery from "../../icons/delivery";
import Hours from "../../icons/hours";
import SaveMoney from "../../icons/save-money";

export default function Services() {
    return <Container className="services">
        <Row className="p-4">
            <Col xs="auto">
                <Row>
                    <Col xs="auto" className="services-icon-place">
                        <SaveMoney />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="services-master-title">
                                ضمانت بازگشت پول
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="services-detail">
                                پول شما به صورت تضمینی قابل بازگشت خواهد بود
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto" className="services-icon-place">
                        <Hours />
                    </Col>
                    <Col xs="auto">
                        <Row>
                            <Col xs={12} className="services-master-title">
                                پشتیبانی در هر زمان
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="services-detail">
                                پشتیبانی 7 روز هفته بصورت 24 ساعته
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs="auto">
                <Row>
                    <Col xs="auto" className="services-icon-place">
                        <Delivery />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="services-master-title">
                                ارسال رایگان
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="services-detail">
                                ارسال سریع و رایگان در سراسر کشور
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}