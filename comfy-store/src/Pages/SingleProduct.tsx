import { useState } from "react";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link, useLoaderData } from "react-router-dom";


export async function loader({ params }: any) {
  const url = `/products/${params.id}`;
  const response = await customFetch(url);
  const product = response.data.data;
  return { product };
}

export function SingleProduct() {
  const { product }: any = useLoaderData();

  const { image, title, company, description, price, colors }: any =
    product.attributes;
  const dollarAmount: string = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  function handleAmount(e : any) {
    setAmount(e.target.value);
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="text-xl mt-2 text-neutral-content font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="font-medium tracking-wider capitalize">colors</h4>
            <div className="mt-2">
              {colors.map((color: string) => {
                return (
                  <button
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            <div className="mt-2 form-control w-full max-w-xs">
              <label htmlFor="amount" className="label">
                <h4 className="font-medium capitalize">amount</h4>
              </label>
              <select
                id="amount"
                value={amount}
                className="select select-secondary select-bordered select-md"
                onChange={handleAmount}
              >
                {generateAmountOptions(20)}
              </select>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md" type="submit">Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}