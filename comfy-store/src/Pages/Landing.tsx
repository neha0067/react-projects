import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = '/products?filters[featured][$eq]=true';

export async function loader() : Promise<Products> {
  const response = await customFetch()(url);
  const products: Product[] = response.data.data;
  return { products };
}

export function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
