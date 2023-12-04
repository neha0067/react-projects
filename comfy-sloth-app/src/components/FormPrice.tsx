// import { useState } from "react";
// import { formatPrice } from "../utils";

import { useLocation, useNavigate } from "react-router-dom";

// function FormRange({ label, name, size, price }: any) {
//   const step = 1000;
//   const maxPrice = 309999;

//   const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
//   return (
//     <div className="form-control w-36">
//       <label htmlFor={label} className="label cursor-pointer">
//         <p className="label-text text-lg font-bold capitalize">{label}</p>
//       </label>
//       <div>{formatPrice(selectedPrice)}</div>
//       <input
//         type="range"
//         name={name}
//         min={0}
//         max={maxPrice}
//         value={selectedPrice}
//         onChange={(e) => setSelectedPrice(parseInt(e.target.value))}
//         step={step}
//         className={`range range-primary ${size}`}
//       />
//     </div>
//   );
// }

function FormPrice() {
  const price = ["0-1000", "1001-2000", "2001-3000", "3001-3099"];

  const navigate = useNavigate();

  const { search }: any = useLocation();

  function handlePrice(e: any) {
    console.log(e.target.id);
    e.preventDefault();
    const modifiedSearch: string = search.replace(
        /price=[^&]*/,
        "price=" + e.target.id
      );

      let navigationUrl = "";

      if(modifiedSearch === "") {
        navigationUrl = `/products?price=${e.target.id}`;
      } else {
        if(modifiedSearch.includes("price")) {
          navigationUrl = `/products${modifiedSearch}`;
        } else {
          navigationUrl = `/products${modifiedSearch}&price=${e.target.id}`;
        }
        
      }

      navigate(navigationUrl);

  }

  return (
    <div>
      <h4 className="text-xl font-bold tracking-wider text-black">Price</h4>

      <div className="grid">
        {price.map((item) => {
          return (
            <button key={item} id={item} onClick={handlePrice}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FormPrice;
