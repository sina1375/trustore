import { Container, Row, Col } from "reactstrap";
import QrCode from "../../icons/qr-code";
import Link from "next/link";

export default function Footer() {
    return <Container fluid={true}>
        <Row>
            <Col xs={12} className="p-0">
                <img className="footer-retail-banner" src="/main-images/retail-banner.jpg" srcSet="/main-images/retail-banner@2x.jpg 2x, /main-images/retail-banner@3x.jpg 3x" />
                <img src="/main-images/retail-banner.svg" className="footer-retail-banner-svg"></img>
                <Row className="footer-retail-banner-row">
                    <Col xs={6} className="d-flex align-items-center justify-content-center">
                        <span className="footer-retail-banner-title">لذت یک خرید آسان و مطمئن</span>
                    </Col>
                    <Col xs={6}>
                        <Row className="d-flex align-items-center justify-content-center mt-5 mb-5">
                            <Col xs="auto">
                                <img src="/main-images/retail-banner-24-hours.png" srcSet="/retail-banner-main-images/24-hours@2x.png 2x, /main-images/retail-banner-24-hours@3x.png 3x" className="footer-retail-banner-hours" />
                            </Col>
                            <Col xs="auto" className="d-flex align-items-center justify-content-center pt-2">
                                <span className="footer-retail-banner-hours-title">98935-77-99-422</span>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center justify-content-center">
                            <Col xs="auto">
                                <span className="footer-retail-banner-news-title">از تخفیف‌ها و جدیدترین‌ها باخبر شوید</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="mb-5 mt-5 pb-5 pt-5">
            <Col xs={12}>
                <Container>
                    <Row>
                        <Col xs="auto">
                            <img className="footer-image" src="https://mail.enamad.ir/ImagesResource/ZW5hbWFkLmly.png" />
                        </Col>
                        <Col xs="auto">
                            <img className="footer-image" src="https://lh3.googleusercontent.com/proxy/6mhuoZA_DaY20n8vvPSVlRIXk6yT39O7O4PHAeKTUna8rhZBa2_82GLNLKgYG7btjQZgOi60QHctPoEVkciPy8gjvgolcacWWOY1xV4lzkIzeoqlu1nsvMU" />
                        </Col>
                        <Col xs="auto">
                            <img className="footer-image" src="https://static.evand.net/images/organizations/logos/original/4841525b7f36e22483d4d8007f4b5d0c.jpg" />
                        </Col>
                        <Col xs="auto" className="mr-auto">
                            <Container fluid={true}>
                                <Row className="mb-3">
                                    <Col xs={12} className="footer-title">
                                        سایر خدمات
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">فروشندگان</Link>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">باشگاه مشتریان</Link>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">سوالات متداول</Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs="auto">
                            <Container fluid={true}>
                                <Row className="mb-3">
                                    <Col xs={12} className="footer-title">
                                        راهنمای خرید کالا
                        </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">نحوه ثبت سفارش</Link>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">نحوه ارسال سفارش</Link>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} className="text-center footer-link">
                                        <Link href="/link3">نحوه پرداخت</Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs="auto">
                            <Container fluid={true}>
                                <Row className="mb-3">
                                    <Col xs={12} className="footer-title">
                                        راه ‌های ارتباطی
                        </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="text-center">
                                        <QrCode />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
}