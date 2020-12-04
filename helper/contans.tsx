import { CartView } from "../interfaces/cartView";

function getApiPath() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://trustore.ir';

    return targetUrl;
    // return "https://localhost:44340";
}

function cartItemSessionKey() {
    return "cartItems";
}

export function getDataFetcher(url: string) {
    return fetch(getApiPath() + url);
}

export function postDataFetcher(url: string, data: any) {
    return fetch(getApiPath() + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function getCartItemsFromSession() {
    if (typeof window !== 'undefined') {
        const cartItemsJson = sessionStorage.getItem(cartItemSessionKey());

        if (cartItemsJson !== null) {
            const cartItems: CartView[] = JSON.parse(cartItemsJson);
            return cartItems;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function setCartItemsToSession(cartItems: CartView[]) {
    if (typeof window !== 'undefined') {
        const cartItemsJson = JSON.stringify(cartItems);
        sessionStorage.setItem(cartItemSessionKey(), cartItemsJson);
    }
}