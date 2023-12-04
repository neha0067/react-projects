import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItemsList from "../components/CartItemsList";
import CartTotals from "../components/CartTotals";
import { clearCart } from "../features/cart/cartSlice";

function Cart() {
  const numItemsInCart: any = useSelector(
    (state: any) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return (
      <div className="align-element flex justify-center align-middle border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          your cart is empty
        </h2>
      </div>
    );
  }

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart())
  }

  return (
    <div>
      <section className="min-w-screen">
        <div className="px-48 text-2xl font-bold flex bg-stone-400 h-20 tracking-wider breadcrumbs">
          <ul>
            <li>
              <Link className="text-yellow-900" to="/">
                Home
              </Link>
            </li>
            <li className="text-black capitalize">cart</li>
          </ul>
        </div>
      </section>
      <section className="align-element mt-20">
        <div className="grid grid-flow-col grid-cols-5">
          <h5 className="ml-40">Item</h5>
          <h5 className="ml-40">Price</h5>
          <h5 className="ml-40">Quantity</h5>
          <h5 className="ml-40">Subtotal</h5>
          <span></span>
        </div>
        <hr className="h-px m-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <CartItemsList />
        <hr className="h-px m-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex justify-between mt-8">
          <Link
            to="/products"
            className="bg-yellow-800 text-white text-sm tracking-wider btn rounded-md"
          >
            Continue Shopping
          </Link>
          <button className="bg-black text-white text-sm tracking-wider btn rounded-md" onClick={handleClearCart}>
            Clear Shopping Cart
          </button>
        </div>
        <CartTotals />
      </section>
      
    </div>
  );
}

export default Cart;
