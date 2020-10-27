import { useRef } from 'react';
import { Col, Row } from "reactstrap";
import getApiPath from '../../helper/contans';
import { SignUpFromBody } from '../../interfaces/signUpFromBody';
import Button from "../Common/Button";

interface Props {
    formRef: (element: HTMLElement | null) => void
}

export default function SignupForm(props: Props) {
    const mobileRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const nationalCodeRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    function submit() {
        if (firstNameRef.current
            && lastNameRef.current
            && mobileRef.current
            && nationalCodeRef.current
            && passwordRef.current
            && confirmPasswordRef.current
            && passwordRef.current.value === confirmPasswordRef.current.value
        ) {

            const signUpFromBody: SignUpFromBody = {
                mobile: mobileRef.current.value,
                password: passwordRef.current.value,
                nationalCode: nationalCodeRef.current.value,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
            }

            return fetch(getApiPath() + '/user/SignUp', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpFromBody),
            }).then(res => res.json()).then(result => {
                alert(result);
            });
        }
    }

    return <div ref={props.formRef}>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={firstNameRef} placeholder="نام" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={lastNameRef} placeholder="نام خانوادگی" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={nationalCodeRef} placeholder="کدملی" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={mobileRef} placeholder="تلفن همراه" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={passwordRef} type="password" placeholder="رمز عبور" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={confirmPasswordRef} type="password" placeholder="تکرار رمز عبور" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs="auto">
                <Button type="primary" className="text-center" onClick={() => submit()}>ثبت نام</Button>
            </Col>
        </Row>
    </div>
}