import ShoppingBasket from "../../icons/shopping-basket";
import { Col, Row, Container } from "reactstrap";
import Button from "./Button";
import React, { useContext, useEffect, useState } from "react";
import { CartView } from "../../interfaces/cartView";
import { getDataFetcher } from "../../helper/contans";
import { CartContext } from "../../contexts/cartContext";

interface Props {
    productID: number,
    count: number,
    selectablePropertyValuesIDs: number[],

    type: "simple" | "normal" | "quick" | "listViewer",

    setCount?: (count: number) => void,
}

export default function AddToBasket(props: Props) {
    const cartContext = useContext(CartContext);
    
    const isAdded = cartContext.cartItems.find(i => i.productID === props.productID) !== undefined;

    function addToCart(count: number, productID: number, selectablePropertyValuesIDs: number[]) {
        const cartItem: CartView = {
            count: count,
            productID: productID,
            selectablePropertyValuesIDs: selectablePropertyValuesIDs,
        }

        if (isAdded) {
            cartContext.removeCartItem(cartItem);
        }
        else {
            cartContext.addCartItem(cartItem);
        }
    }

    if (isAdded === undefined) {
        return <div></div>
    }
    else {
        if (props.type === "normal") {
            return <Button type={isAdded ? "secondary" : "primary"} onClick={() => addToCart(props.count, props.productID, props.selectablePropertyValuesIDs)} withoutPadding={true}>
                <Container className="add-to-basket">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center pl-0">
                            <ShoppingBasket className={"shopping-basket-add-to-basket-button" + (isAdded ? " remove" : "")} />
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                            {isAdded ? "حذف از سبد خرید" : "افزودن به سبد"}
                        </Col>
                    </Row>
                </Container>
            </Button>
        } else if (props.type == "quick") {
            return <Button type={isAdded ? "secondary" : "primary"} onClick={() => addToCart(props.count, props.productID, props.selectablePropertyValuesIDs)}>
                <Row>
                    <Col xs="auto" className="d-flex align-items-center p-0">
                        <ShoppingBasket className={"product-item-quick-view-show-add-to-basket-button-path" + (isAdded ? " remove" : "")} svgClassName="product-item-quick-view-show-add-to-basket-button-svg" />
                    </Col>
                    <Col className="text-center">
                        {isAdded ? "حذف" : "خرید"}
                    </Col>
                </Row>
            </Button>
        }
        else if (props.type === "simple") {
            return <Button className="h-100" withoutPadding={true} type="secondary" onClick={() => addToCart(props.count, props.productID, props.selectablePropertyValuesIDs)}>
                <Row className="h-100">
                    <Col xs={12} className="d-flex align-items-center">
                        <ShoppingBasket className={"simple-add-to-basket-button-path" + (isAdded ? " remove" : "")} svgClassName="simple-add-to-basket-button-svg" />
                    </Col>
                </Row>
            </Button>
        }
        else if (props.type === "listViewer") {
            return <Button className="h-100" withoutPadding={true} type="empty" onClick={() => addToCart(props.count, props.productID, props.selectablePropertyValuesIDs)}>
                <Row className="h-100 pt-3 pb-3">
                    <Col xs="auto" className="d-flex align-items-center p-0">
                        <ShoppingBasket className={"listViewer-add-to-basket-button-path" + (isAdded ? " remove" : "")} svgClassName="listViewer-add-to-basket-button-svg" />
                    </Col>
                    <Col className="text-center">
                        {isAdded ? "حذف از سبـد" : "افزودن به سبـد"}
                    </Col>
                </Row>
            </Button>
        }
        else {
            return <div></div>
        }
    }
}