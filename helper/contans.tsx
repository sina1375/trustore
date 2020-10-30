export function getApiPath() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://trustore.ir';

    return proxyUrl + targetUrl;
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