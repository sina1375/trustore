import ShoppingBasket from "../../icons/shopping-basket";
import { Col, Row, Container } from "reactstrap";
import Button from "./Button";
import { AddToCartFromBody } from "../../interfaces/addToCartFomBody";
import React, { useEffect, useState } from "react";
import { CartView } from "../../interfaces/cartView";
import getApiPath from "../../helper/contans";

interface Props {
    productID: number,
    count: number,
    selectablePropertyValuesIDs: number[],

    type: "simple" | "normal" | "quick" | "listViewer",

    setCount?: (count: number) => void,
}

function addCartItem(count: number, productID: number, selectablePropertyValuesIDs: number[]) {
    const addToCartFromBody: AddToCartFromBody = {
        count: count,
        id: productID,
        selectablePropertyValuesIDs: selectablePropertyValuesIDs
    }

    return fetch(getApiPath() + '/cart/AddToCart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addToCartFromBody),
    }).then(res => res.json()).then(result => result as boolean);
}

function getCartItem(productID: number) {
    return fetch(getApiPath() + '/cart/GetCartItem?productID=' + productID)
        .then(res => res.text())
        .then(text => {
            if (text.length) {
                return JSON.parse(text);
            } else {
                return null;
            }
        })
        .then(result => {
            if (result !== null) {
                const cartView: CartView = result;
                return cartView;
            }
            else {
                return null;
            }
        });
}

export default function AddToBasket(props: Props) {

    const [isAdded, setIsAdded] = useState<boolean | undefined>(undefined);

    function addToCart(count: number, productID: number, selectablePropertyValuesIDs: number[]) {
        return addCartItem(count, productID, selectablePropertyValuesIDs).then(_res => getCartItem(props.productID).then(res => {
            if (res === null) {
                setIsAdded(false);
            }
            else {
                setIsAdded(true);
                if (props.setCount !== undefined) {
                    props.setCount(res.count);
                }
            }
        }));
    }

    useEffect(() => {
        getCartItem(props.productID).then(res => {
            if (res === null) {
                setIsAdded(false);
            }
            else {
                setIsAdded(true);
                if (props.setCount !== undefined) {
                    props.setCount(res.count);
                }
            }
        });
    }, []);

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