import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function CartItemsList() {

    const cartItems = useSelector((state : any) => state.cartState.cartItems);

  return (
    <div>
        {
            cartItems.map((cartItem: any) => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />
            })
        }
    </div>
  )
}

export default CartItemsList