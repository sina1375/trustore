import { Row, Col } from "reactstrap";
import User from "../../icons/user";
import { MdChatBubbleOutline } from "react-icons/md";
import AddCommentButton from "../Common/AddCommentButton";
import React, { useState } from "react";
import Popup from "../Common/Popup";
import Rate from "../Common/Rate";
import Button from "../Common/Button";


//interface Props {
//    productID: number,
//}

export default function ProductComments() {
    const [isOpenComment, setOpenCommnet] = useState(false);

    return <React.Fragment>
        <Row>
            <Col xs="auto" className="d-flex align-items-start pl-0 pb-2 pb-sm-0">
                <MdChatBubbleOutline color="#619fd5" fontSize="15px" />
            </Col>
            <Col xs="auto" className="d-flex align-items-end pl-0 pr-0 pb-2 pb-sm-0">
                <User />
            </Col>
            <Col className="product-comment-title" xs="auto">
                <Row className="mt-1">
                    <Col xs={12}>
                        شما هم می‌توانید در مورد این کالا نظر بدهید
                </Col>
                </Row>
                <Row className="subtitle pb-2 pb-sm-0">
                    <Col xs={12}>
                        برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید
                </Col>
                </Row>
            </Col>
            <Col xs="auto">
                <AddCommentButton onClick={() => setOpenCommnet(true)} />
            </Col>
        </Row>
        <Popup isOpen={isOpenComment} setOpen={setOpenCommnet} className="p-3">
            <Row className="mb-5">
                <Col xs={12} className="add-comment-title split-bottom">
                    ثبت نظر
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={12} className="add-comment-question">
                    امتیاز شما به این محصول از 1 تا 5 ، چنده؟
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={12}>
                    <Rate />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={12}>
                    <textarea className="add-comment-input p-2" placeholder="نظرتو میتونی اینجا بنویسی ..." />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col xs="auto" className="mr-auto ml-auto">
                    <Button type="primary" onClick={() => alert("click")}>
                        ثبت
                    </Button>
                </Col>
            </Row>
        </Popup>
    </React.Fragment>
}