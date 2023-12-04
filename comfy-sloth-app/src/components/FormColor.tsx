import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function FormColor({ defaultValue }: any) {
  const [currentColor, setCurrentColor] = useState(defaultValue|| "all");

  const { colors }: any = useLoaderData();

  const navigate = useNavigate();

  const { search }: any = useLocation();

  function handleColor(e: any) {
    
    e.preventDefault();
    const color = e.target.id.substring(1);
    setCurrentColor(color);

    const modifiedSearch: string = search.replace(
      /color=[^&]*/,
      "color=" + color
    );

    let navigationUrl = "";

    if (modifiedSearch === "") {
      navigationUrl = `/products?color=${color}`;
    } else {
      if (modifiedSearch.includes("color")) {
        navigationUrl = `/products${modifiedSearch}`;
      } else {
        navigationUrl = `/products${modifiedSearch}&color=${color}`;
      }
    }

    navigate(navigationUrl);
  }

  return (
    <section>
      <div className="mb-4">
        <h4 className="text-xl font-bold tracking-wider mb-2">Colors</h4>
        <div className="flex">
          <button
            className={`mr-2 ${
              currentColor === "all" && "border-2 border-secondary"
            }`}
          >
            All
          </button>
          <div className="pt-1.5">
            {colors.map((color: string) => {
              return (
                <button
                  className={`badge w-6 h-6 mr-2 ${
                    color.substring(1) === currentColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  key={color}
                  id={color}
                  onClick={handleColor}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormColor;
