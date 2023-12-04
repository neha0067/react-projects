import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";

function CartItem({ cartItem }: any) {

  const { image, color, price, name, amount, id }: any = cartItem; 
  console.log({amount});
  const [productCount, setProductCount] = useState(amount);

  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeItem({product: cartItem}));
  }

  function handleDecreaseItem() {
    setProductCount((prevState: number) => prevState - 1);
    dispatch(editItem({id, color, amount: productCount - 1}));
  }

  function handleIncreaseItem() {
    setProductCount((prevState: number) => prevState + 1);
    dispatch(editItem({id, color, amount: productCount + 1 }));
  }

  return (
    <article className="grid grid-flow-col p-2 my-8">
      <div className="flex w-72">
        <img src={image} alt={name} className="w-24 h-24 rounded"/>
        <div className="p-6">
          <h5 className="capitalize font-bold text-black tracking-widest">{name}</h5>
          <p className="text-gray-500">
            Color : <span><div className="w-2 h-4 badge ml-2" style={{backgroundColor: color}}></div></span>
          </p>
        </div>
      </div>
      <h5 className="pr-4 py-8 text-yellow-800">{formatPrice(price)}</h5>
      <div className="flex m-4">
        <button
          className="mr-8"
          onClick={handleDecreaseItem}
        >
          <FaMinus />
        </button>
        <h2 className="font-bold text-4xl mr-8 mt-2">{productCount}</h2>
        <button
          className=""
          onClick={handleIncreaseItem}
        >
          <FaPlus />
        </button>
      </div>
      <h5 className="p-8">{formatPrice(price * productCount)}</h5>
      <div className="py-8">
        <button className="text-xl text-white  bg-red-800 w-5 h-6 rounded" onClick={handleRemoveItem}>
          <MdDelete />
        </button>
      </div>
      
    </article>
  );
}

export default CartItem;
