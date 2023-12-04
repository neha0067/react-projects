import { Form, useLoaderData } from "react-router-dom";
import FormPrice from "./FormPrice";
import FormSearch from "./FormSearch";
import FormCategory from "./FormCategory";
import FormCompany from "./FormCompany";
import FormColor from "./FormColor";
import FormShipping from "./FormShipping";

function Filters() {
  const { params }: any = useLoaderData();
  return (
    <div className="pr-16">
      <Form>
        {/* Search  */}
        <FormSearch />
        {/* Category  */}
        <FormCategory defaultValue={params.category} />
        {/* Company  */}
        <FormCompany defaultValue={params.company} />
        {/* Color  */}
        <FormColor defaultValue={params.color} />
        {/* Price  */}
        <FormPrice  />
        {/* Shipping  */}
        <FormShipping defaultValue={params.shipping === 'true' ? true : false} />
      </Form>
    </div>
  );
}

export default Filters;
