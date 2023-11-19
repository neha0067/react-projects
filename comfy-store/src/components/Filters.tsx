import { Form, Link, useLoaderData } from "react-router-dom";
import { FormInput } from "./";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  
  const { companies, categories, params }: any = useLoaderData();
  const { search, company, category, shipping, order, price } : any = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Companies */}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* Order */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price */}
      <FormRange label="select price" name="price" size="range-sm" price={price}/>
      {/* Shipping */}
      <FormCheckbox label="free shipping" name='shipping' size='checkbox-sm' defaultValue={shipping} />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;
