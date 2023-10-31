import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const loaderData: any = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {loaderData.products.map((product: any) => {
        const { title, price, image, company } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 group"
          >
            <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg tracking-wider">{title}</h3>
              <h3 className="capitalize text-md text-neutral-content tracking-wider">{company}</h3>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{formatPrice(price)}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
