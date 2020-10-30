import React, { useMemo, useState } from 'react'
import { getCartItemsFromSession, setCartItemsToSession } from '../helper/contans';
import { CartView } from '../interfaces/cartView';

interface Props {
    children: any,
}

export const CartContext = React.createContext({
    cartItems: [] as CartView[],
    addCartItem: (_cartItem: CartView) => { },
    removeCartItem: (_cartItem: CartView) => { },
});

export default function CartContextProvider(props: Props) {
    const [cartViews, setCartViews] = useState<CartView[]>([]);

    const addCartItem = (cartItem: CartView) => {
        setCartViews([...cartViews, cartItem]);

        setCartItemsToSession(cartViews);
    };

    const removeCartItem = (cartItem: CartView) => {
        setCartViews(cartViews.filter(i => i.productID !== cartItem.productID));

        setCartItemsToSession(cartViews);
    };

    useMemo(() => {
        const cartItems = getCartItemsFromSession();
        if (cartItems !== null) {
            setCartViews(cartItems);
        }
    }, []);

    return (
        <CartContext.Provider value={{
            cartItems: cartViews,
            addCartItem: addCartItem,
            removeCartItem: removeCartItem,
        }}>
            {props.children}
        </CartContext.Provider>
    );
}