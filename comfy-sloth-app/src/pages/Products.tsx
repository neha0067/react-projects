import { Link } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";
import axios from "axios";
import Filters from "../components/Filters";
import { getProductsFromLocalStorage, handleFilterParams } from "../utils";

let url = "https://course-api.com/react-store-products";

export async function loader({ request }: any) {
  let data = getProductsFromLocalStorage();

  if (data === null) {
    const response = await axios.get(url);
    data = response.data;

    localStorage.setItem("products", JSON.stringify(data));
  }

  const allCategories = data.map((item: any) => {
    return item.category;
  });
  const categories = ["all", ...new Set(allCategories)];

  const allCompanies = data.map((item: any) => {
    return item.company;
  });

  const companies = ["all", ...new Set(allCompanies)];

  let allColors: string[] = [];

  data.forEach((item: any) => {
    allColors.push(...item.colors);
  });

  const colors = [...new Set(allColors)];

  const params: any = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  if (Object.keys(params).length > 0) {
    data = handleFilterParams(data, params);
  }

  return { products: data, categories, companies, colors, params };
}

function Products() {
  return (
    <article>
      <section className="min-w-screen">
        <div className="px-48 text-2xl font-bold flex bg-stone-400 h-20 tracking-wider breadcrumbs">
          <ul>
            <li>
              <Link className="text-yellow-900" to="/">
                Home
              </Link>
            </li>
            <li>
              <h2 className="text-black">Products</h2>
            </li>
          </ul>
        </div>
      </section>
      <section className="align-element mt-16 flex">
        <Filters />
        <ProductsContainer />
      </section>
    </article>
  );
}

export default Products;
