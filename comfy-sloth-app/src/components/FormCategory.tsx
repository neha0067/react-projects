import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function FormCategory({defaultValue}: any) {
  const [currentCategory, setCurrentCategory] = useState(defaultValue || "all");

  const { categories }: any = useLoaderData();

  const navigate = useNavigate();

  const { search }: any = useLocation();

  function handleCategory(e: any) {
    setCurrentCategory(e.target.id);
    e.preventDefault();
    const modifiedSearch: string = search.replace(
      /category=[^&]*/,
      "category=" + e.target.id
    );
    let navigationUrl = "";

    if (modifiedSearch === "") {
      navigationUrl = `/products?category=${e.target.id}`;
    } else {
      if (modifiedSearch.includes("category")) {
        navigationUrl = `/products${modifiedSearch}`;
      } else {
        navigationUrl = `/products${modifiedSearch}&category=${e.target.id}`;
      }
    }

    navigate(navigationUrl);
  }

  return (
    <section>
      <div className="mb-4">
        <h4 className="text-xl font-bold tracking-wider mb-2">Category</h4>
        <div className="grid">
          {categories.map((category: string) => {
            return (
              <div>
                <button
                  name="category"
                  id={category}
                  className="w-36 capitalize tracking-wider mb-0.5"
                  key={category}
                  onClick={handleCategory}
                >
                  {category}
                </button>
                {currentCategory === category && (
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FormCategory;
