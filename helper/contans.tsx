export default function getApiPath() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://trustore.ir';

    return proxyUrl + targetUrl;
} 