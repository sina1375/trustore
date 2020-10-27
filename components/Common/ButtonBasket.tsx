import { Container, Row, Col } from "reactstrap";
import ShoppingBasket from "../../icons/shopping-basket";

interface ButtonBasketProps {
	basketCount: number,
}

export default function ButtonBasket(props: ButtonBasketProps) {
	return <Container fluid={true} className="button-basket">
		<Row>
			<Col xs={4}>
				<ShoppingBasket className="shopping-basket-basket-button" />
				{props.basketCount > 0 &&
					<div className="d-flex align-items-center justify-content-center button-basket-count">
						{props.basketCount}
					</div>}
			</Col>
			<Col xs={8} className="d-flex align-items-center button-basket-text split-right">
				سبد خرید شما
            </Col>
		</Row>
	</Container>
}