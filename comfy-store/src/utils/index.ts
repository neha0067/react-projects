import axios from "axios";

const productionUrl = 'http://localhost:1337/api';

export const customFetch = axios.create({
    baseURL: productionUrl
});

export const formatPrice = (price: number) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseInt((price / 100).toFixed(2)));
    return dollarsAmount;
}