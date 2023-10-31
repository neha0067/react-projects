import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils";

const url = "/products?pagination[page]=1&pagination[pageSize]=5";
const allProductsUrl = "/products";
export async function loader() {
  const response = await customFetch(url);
  const {data, meta} : any = response.data;

  const allProductsResponse = await customFetch(allProductsUrl);
  const allProducts : any = allProductsResponse.data.data;
  const allCategories : any = allProducts.map((product: any) => {
    return product.attributes.category;
  })

  const categories = ['all', ...new Set(allCategories)];

  const allCompanies : any = allProducts.map((product: any) => {
    return product.attributes.company;
  })

  const companies = ['all', ...new Set(allCompanies)];

  return {products: data, meta, companies, categories};
}

export function Products() {
  return (
    <section className="align-element py-20">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </section>
  )
}