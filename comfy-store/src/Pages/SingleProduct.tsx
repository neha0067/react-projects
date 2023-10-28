import { useState } from "react";
import { formatPrice, customFetch } from "../utils";
import { Link, useLoaderData} from "react-router-dom";

export async function loader({params}: any) {
  const url = `/products/${params.id}`
  const response = await customFetch(url);
  const product = response.data.data;
  return { product };
}

export function SingleProduct() {
  const {product} : any = useLoaderData();
  const {image, title, company, description, price, colors} : any = product.attributes;
  const dollarAmount: string = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className="w-96 h-96 object-cover rounded-lg lg:w-full" />
        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="text-xl mt-2 text-neutral-content font-bold">{company}</h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  )
}