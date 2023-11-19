import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItemsList() {

    const cartItems = useSelector((state : any) => state.cartState.cartItems);

    return (
        <>
            {
                cartItems.map((item: any) => {
                    return <CartItem key={item} cartItem={item}/>
                })
            }
        </>
    )
  }
  
  export default CartItemsList