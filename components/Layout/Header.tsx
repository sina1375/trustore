import { Container, Row, Col } from "reactstrap";
import React, { useContext, useState } from "react";
import ButtonBasket from "../Common/ButtonBasket";
import SearchBox from "../Common/Searchbox";
import Logo from "../../icons/logo";
import Link from "next/link";
import MenuIcon from "../../icons/menu";
import Menu from "./Menu";
import { useTransition, animated } from "react-spring";
import Popup from "../Common/Popup";
import LoginCotainerForm from "./LoginCotainerForm";
import { CartContext } from "../../contexts/cartContext";

export default function Header() {
	const cartContext = useContext(CartContext);

	const basketCount = cartContext.cartItems.length;

	const [isOpenMenu, setOpenMenu] = useState(false);
	const [isOpenLogin, setOpenLogin] = useState(false);

	const transitions = useTransition(isOpenMenu, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return <React.Fragment>
		<Container fluid={true} className="top-header">
			<Row>
				<Col>
					<Container>
						<Row>
							{/* <Col xs="auto">
								<a onClick={() => setOpenLogin(true)} href="#login">
									ثبت نام / ورود
                                </a>
							</Col> */}
							<Col xs="auto">
								<Link href="/contact">
									<a>
										تماس با ما
									</a>
								</Link>
							</Col>
							<Col xs="auto">
								<Link href="/about">
									<a>
										درباره ما
									</a>
								</Link>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
		<Container fluid={true} className="header pt-2 pb-2 pt-sm-5 pb-sm-5">
			<Container>
				<Row>
					<Col xs={12} sm={2} className="pr-0 pl-0 mb-2 mb-sm-0 d-flex justify-content-center">
						<Link href="/">
							<a>
								<Logo />
							</a>
						</Link>
					</Col>
					<Col className="pr-0 pl-0 pr-sm-3 pl-sm-3">
						<SearchBox />
					</Col>
					<Col xs="auto" className="pl-0 pr-2 pr-sm-3">
						<Link href="/cart">
							<a>
								<ButtonBasket basketCount={basketCount} />
							</a>
						</Link>
					</Col>
				</Row>
			</Container>
		</Container>
		<Container fluid={true} className="bottom-header">
			<Container fluid={true} className="split-bottom">
				<Container className="p-2">
					<Row>
						<Col className="menu-button" xs="auto">
							<Row>
								<Col xs="auto">
									<MenuIcon />
								</Col>
								<Col onClick={() => setOpenMenu(!isOpenMenu)} onMouseEnter={() => setOpenMenu(true)} xs="auto">
									دسته بندی‌ها
                            </Col>
							</Row>
						</Col>
						<Col className="bottom-header-link" xs="auto">
							<Link href="/products/[id]" as="/products/1">
								لینک 1
                    	</Link>
						</Col>
						<Col className="bottom-header-link" xs="auto">
							<Link href="/about">
								لینک 2
                    	</Link>
						</Col>
					</Row>
				</Container>
			</Container>
			<Menu isOpen={isOpenMenu} setOpen={setOpenMenu} />
		</Container>
		{transitions.map(({ item, props }) =>
			item &&
			<animated.div style={props} className="menu-background" />
		)}
		<Popup isOpen={isOpenLogin} setOpen={setOpenLogin} className="p-3">
			<LoginCotainerForm />
		</Popup>
	</React.Fragment>
}