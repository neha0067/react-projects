import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils";


function ProductsGrid() {

const { products }: any = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
            products.map((product: any) => {
                const { name, price, image } = product;
                return <Link key={product.id} to={`/products/${product.id}`} className="card w-full shadow-xl hover:shadow-2">
                    <figure className="px-4 pt-4">
                        <img src={image} alt={name} className="h-64 rounded-xl w-full object-cover md:h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title capitalize tracking-wider">{name}</h2>
                        <span className="text-secondary">{formatPrice(price)}</span>
                    </div>
                </Link>
            })
        }
    </div>
  )
}

export default ProductsGrid