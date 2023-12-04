import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ProductsGrid } from ".";
import ProductsList from "./ProductsList";

function ProductsContainer() {
  const [layout, setLayout] = useState("grid");
  const { products }: any = useLoaderData();

  const navigate = useNavigate();

  const { search }: any = useLocation();

  const sortOptions = [
    "Price (Lowest)",
    "Price (Highest)",
    "Name (A-Z)",
    "Name (Z-A)",
  ];

  function setActiveStyles(pattern: string) {
    return `text-xl mx-1 btn btn-sm ${
      pattern === layout ? "btn-black" : "btn-ghost"
    }`;
  }

  function handleSort(e: any) {
    e.preventDefault();

    const modifiedSearch: string = search.replace(
      /sort=[^&]*/,
      "sort=" + e.target.value
    );

    let navigationUrl = "";

    if (modifiedSearch === "") {
      navigationUrl = `/products?sort=${e.target.value}`;
    } else {
      if (modifiedSearch.includes("sort")) {
        navigationUrl = `/products${modifiedSearch}`;
      } else {
        navigationUrl = `/products${modifiedSearch}&sort=${e.target.value}`;
      }
    }

    navigate(navigationUrl);
  }

  return (
    <div>
      <section className="flex">
        <div className="flex mr-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
        <p className="tracking-wider mt-1 mr-2 w-30">
          {products.length} Products Found
        </p>
        <div className="grid grid-cols-5 mt-1">
          <hr className="h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700 col-span-3" />
          <Form className="mx-2 flex col-span-2">
            <label className="mr-4">Sort By</label>
            <select
              name="order"
              id="order"
              className="select select-bordered select-sm h-2 bg-transparent border-none"
              onChange={handleSort}
            >
              {sortOptions.map((sortOption) => {
                return (
                  <option key={sortOption} value={sortOption}>
                    {sortOption}
                  </option>
                );
              })}
            </select>
          </Form>
        </div>
      </section>
      <section className="mb-6">
        {products.length === 0 ? (
          <h5>Sorry, no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </section>
    </div>
  );
}

export default ProductsContainer;
