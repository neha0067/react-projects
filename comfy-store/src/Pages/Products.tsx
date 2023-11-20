import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch, formURLUsingParams } from "../utils";

let url = "/products";
const allProductsUrl = "/products";

export async function loader({request}: any) : Promise<ProductsLoaderResponse> {

  const params: any = Object.fromEntries(new URL(request.url).searchParams.entries());

  if(Object.keys(params).length > 0){
    url = formURLUsingParams(params, url);
  }

  const response = await customFetch()(url);
  url = "/products";
  const {data, meta} : any = response.data;

  const allProductsResponse = await customFetch()(allProductsUrl);
  const allProducts : any = allProductsResponse.data.data;
  const allCategories : any = allProducts.map((product: any) => {
    return product.attributes.category;
  })

  const categories: any = ['all', ...new Set(allCategories)];

  const allCompanies : any = allProducts.map((product: any) => {
    return product.attributes.company;
  })

  const companies: any = ['all', ...new Set(allCompanies)];

  return {products: data, meta, companies, categories, params};
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