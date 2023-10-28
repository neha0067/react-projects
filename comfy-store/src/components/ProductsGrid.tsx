import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

function ProductsGrid() {
  const loaderData: any = useLoaderData();
  
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {
        loaderData.products.map((product: any) => {
          const {title, price, image} = product.attributes;
          return <Link key={product.id} to = {`/products/${product.id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
            <figure className='px-4 pt-4'>
              <img src={image} alt={title} className=''/>
            </figure>
            <div>
              <h2>{title}</h2>
              <span>{formatPrice(price)}</span>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default ProductsGrid