import { useRef } from 'react';
import { Col, Row } from "reactstrap";
import { postDataFetcher } from '../../helper/contans';
import { SignInFromBody } from '../../interfaces/signInFromBody';
import Button from "../Common/Button";

interface Props {
    formRef: (element: HTMLElement | null) => void
}

export default function LoginForm(props: Props) {
    const mobileRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function submit() {
        if (mobileRef.current && passwordRef.current) {

            const signInFromBody: SignInFromBody = {
                mobile: mobileRef.current.value,
                password: passwordRef.current.value
            }

            return postDataFetcher('/user/SignIn', signInFromBody).then(res => res.json()).then(result => {
                alert(result);
            });
        }
    }

    return <div ref={props.formRef}>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={mobileRef} name="mobile" placeholder="شماره تلفن همراه" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs={12}>
                <input className="dark" ref={passwordRef} name="password" type="password" placeholder="رمز عبور" />
            </Col>
        </Row>
        <Row className="mb-2">
            <Col xs="auto">
                <Button type="primary" className=" text-center" onClick={() => submit()}>ورود</Button>
            </Col>
        </Row>
    </div>
}