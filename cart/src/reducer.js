export default function reducer(state, action) {
    switch(action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "REMOVE":
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
        case "INCREASE":
            const newCartIncreased = state.cart.map((item) => {
                if(item.id === action.payload.id){
                    return { ...item, amount : item.amount + 1};
                }
                return item;
            });
            return { ...state, cart: newCartIncreased};
        case "DECREASE":
            const newCartDecreased = state.cart.map((item) => {
                if(item.id === action.payload.id){
                    return { ...item, amount : item.amount - 1};
                }
                return item;
            }).filter((item) => item.amount > 0);

            return { ...state, cart: newCartDecreased};
        case "GET_TOTAL":
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                cartTotal.total += cartItem.amount * cartItem.price;
                cartTotal.amount += cartItem.amount;
                return cartTotal;
            }, 
            {
                total: 0,
                amount: 0
            });
            total = parseFloat(total.toFixed(2))
            return { ...state, total, amount};
        default:
            return state;
    }    
}