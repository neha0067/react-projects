import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { useState } from "react";
import Rating from "../components/Rating";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export async function loader({ params }: any) {
  const url = `https://course-api.com/react-store-single-product?id=${params.id}`;
  const { data } = await axios.get(url);
  return data;
}

function SingleProduct() {
  const {
    id,
    name,
    images,
    reviews,
    price,
    description,
    stock,
    company,
    colors,
  }: any = useLoaderData();

  const dispatch = useDispatch();

  const [productCount, setProductCount] = useState(1);

  const [currentImage, setCurrentImage] = useState(images[0]);

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const cartItem: any = {
    amount: productCount,
    color: currentColor,
    id: id,
    image: currentImage.url,
    max: stock,
    name: name,
    price: price,
  };

  function handleAddItem() {
    dispatch(addItem({ product: cartItem }));
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
            <li>
              <Link to="/products" className="text-yellow-900">
                Products
              </Link>
            </li>
            <li className="text-black capitalize">{name}</li>
          </ul>
        </div>
      </section>
      <section className="align-element my-24">
        <Link
          to="/products"
          className="bg-yellow-800 text-white text-sm tracking-wider p-2 rounded-md"
        >
          BACK TO PRODUCTS
        </Link>
        <div className="flex mt-16">
          <div className="mr-16">
            <img
              src={currentImage.thumbnails.full.url}
              width={currentImage.thumbnails.full.width}
              height={currentImage.thumbnails.full.height}
              alt={name}
            />
            <div className="flex justify-between mt-12">
              {images.map((image: any) => {
                return (
                  <img
                    src={image.thumbnails.small.url}
                    width={image.thumbnails.small.width * 2}
                    height={image.thumbnails.small.height}
                    alt={name}
                    className="rounded-sm object-cover"
                    onClick={() => setCurrentImage(image)}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold capitalize pb-4">{name}</h2>
            <div className="flex pb-4">
              <Rating />
              <p className="ml-4">({reviews} customer reviews)</p>
            </div>
            <h4 className="text-yellow-800 text-xl pb-4">
              {formatPrice(price)}
            </h4>
            <p className="pb-4">{description}</p>
            <p className="pb-4">
              <span className="font-bold text-l mr-4">Available : </span>
              {stock > 0 ? "In Stock" : "Out of stock"}
            </p>
            <p className="pb-4 capitalize">
              <span className="font-bold text-l mr-10">Brand : </span>
              {company}
            </p>
            <hr className="h-px m-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>
              <div>
                <span className="font-bold">Colors : </span>
                {colors.map((color: string) => {
                  return (
                    <button
                      className={`badge w-6 h-6 mr-2 ${
                        color === currentColor && "border-2 border-secondary"
                      }`}
                      style={{ backgroundColor: color }}
                      key={color}
                      id={color}
                      onClick={() => setCurrentColor(color)}
                    ></button>
                  );
                })}
              </div>
              <div className="flex m-4">
                <button
                  className="mr-8"
                  onClick={() => setProductCount((prevState) => prevState - 1)}
                >
                  <FaMinus />
                </button>
                <h2 className="font-bold text-4xl mr-8">{productCount}</h2>
                <button
                  className=""
                  onClick={() => setProductCount((prevState) => prevState + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button className="bg-yellow-800 text-white text-sm tracking-wider p-3 rounded-md" onClick={handleAddItem}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
