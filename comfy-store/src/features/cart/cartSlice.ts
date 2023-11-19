import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const defaultState: any = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const getCartFromLocalStorage = () => {
    const cartFromLocalStorage = localStorage.getItem('cart');
    return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : defaultState;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product }: any = action.payload;
            const cartItem: any = state.cartItems.find((item: any) => item.cartID === product.cartID);
            if (cartItem) {
                cartItem.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            
            cartSlice.caseReducers.calculateTotals(state);

            toast.success('Item added to cart');
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((item: any) => item.cartID === cartID);

            state.cartItems = state.cartItems.filter((item: any) => item.cartID !== product.cartID);

            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            
            cartSlice.caseReducers.calculateTotals(state);

            toast.error('Item removed from cart');
        },
        clearCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },
        editItem: (state, action) => {
            const {cartID, amount} = action.payload;
            const item = state.cartItems.find((item: any) => item.cartID === cartID);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('Cart updated');
        },
        calculateTotals : (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;

export default cartSlice.reducer;