import { useSelector } from "react-redux";
import CartTotals from "../components/CartTotals";
import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  const cartItems = useSelector((state: any) => state.cartState.cartTotal);

  if (cartItems.length === 0) {
    return (
      <div className="border-b border-base-300 pb-5 mt-16">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="align-element">
      <div className="border-b border-base-300 pb-5 mt-16">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          place your order
        </h2>
      </div>
      <div className="mt-8 grid md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
}

export default Checkout;
