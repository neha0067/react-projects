import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

function ProductsGrid() {
  const { products }: any = useLoaderData();
  
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {
        products.map((product: Product) => {
          const {title, price, image} = product.attributes;
          return <Link key={product.id} to = {`/products/${product.id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
            <figure className='px-4 pt-4'>
              <img src={image} alt={title} className='h-64 rounded-xl w-full object-cover md:h-48'/>
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{formatPrice(price)}</span>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default ProductsGrid