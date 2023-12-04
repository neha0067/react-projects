import { useLocation, useNavigate } from "react-router-dom";

function FormShipping({ defaultValue }: any) {
  const navigate = useNavigate();

  const { search }: any = useLocation();

  function handleShipping(e: any) {
    e.preventDefault();

    let navigationUrl = "";

    if (search === "") {
      navigationUrl = `/products?shipping=true`;
    } else {
      if (search.includes("shipping")) {
        navigationUrl = `/products${search}`;
      } else {
        navigationUrl = `/products${search}&shipping=true`;
      }
    }

    if (defaultValue) {
      navigationUrl = navigationUrl.replace(
        /shipping=[^&]*/,
        "shipping=" + false
      );
    }
    navigate(navigationUrl);
  }

  return (
    <section>
      <div>
        <label htmlFor="free shipping" className="label cursor-pointer">
          <span className="label-text capitalize">free shipping</span>
        </label>
        <input
          type="checkbox"
          defaultChecked={defaultValue}
          name="shipping"
          onClick={handleShipping}
        />
      </div>
    </section>
  );
}

export default FormShipping;
