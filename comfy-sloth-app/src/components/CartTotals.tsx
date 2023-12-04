import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";

function CartTotals() {

    const { orderTotal, shipping, cartTotal }: any = useSelector((state: any) => state.cartState);

  return (
    <section className="mt-8 grid grid-flow-col grid-cols-5">
      <div className="col-span-4"></div>
      <div className="w-64 border-solid border-2 border-gray-700 p-4">
        <article>
          <h5>
            Subtotal : <span>{formatPrice(cartTotal)}</span>
          </h5>
          <p>
            Shipping fee : <span>{formatPrice(shipping)}</span>
          </p>
          <hr className="h-px m-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <h4>
            Order Total : <span>{formatPrice(orderTotal)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="bg-yellow-800 text-white text-sm tracking-wider btn rounded-md mt-4">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}

export default CartTotals;
