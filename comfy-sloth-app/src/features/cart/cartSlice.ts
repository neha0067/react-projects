import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0
};

const getCartFromLocalStorage = () => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : defaultState;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const cartItem = state.cartItems.find((item: any) => {
                return item.id === product.id && item.color === product.color;
            });

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
            const { product } = action.payload;
            const filteredCartItems = state.cartItems.filter((cartItem: any) => cartItem.id !== product.id && cartItem.color !== product.color);
            state.cartItems = filteredCartItems;

            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;

            cartSlice.caseReducers.calculateTotals(state);

            toast.error('Item removed from cart');

        },
        editItem: (state, action) => {
            const { id, amount, color } = action.payload;
            const cartItem = state.cartItems.find((item: any) => item.id === id && item.color === color);
            console.log({amount, cartAmount: cartItem.amount})
            state.numItemsInCart += amount - cartItem.amount;
            console.log(state.numItemsInCart)
            state.cartTotal += cartItem.price * (amount - cartItem.amount);
            
            state.cartItems.forEach((item: any) => {
                if(item.id === id && item.color === color){
                    item.amount = amount;
                }
            });

            cartSlice.caseReducers.calculateTotals(state);

        },
        clearCart: () => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            toast.success('Your cart has been cleared');
            return defaultState;
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;