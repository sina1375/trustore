import { CartView } from "../interfaces/cartView";

function getApiPath() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://trustore.ir';

    return proxyUrl + targetUrl;
    // return "https://localhost:44340";
}

function cartItemSessionKey() {
    return "cartItems";
}

export function getDataFetcher(url: string) {
    return fetch(getApiPath() + url, {
        headers: {
            'origin': 'x-requested-with',
        }
    })
}

export function postDataFetcher(url: string, data: any) {
    return fetch(getApiPath() + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'origin': 'x-requested-with',
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