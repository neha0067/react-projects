import { Form } from "react-router-dom";
import { SubmitButton } from ".";

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl tracking-wider">Shipping Information</h4>
      <div className="form-control ">
        <label className="label">
          <span className="label-text capitalize tracking-wider">first name</span>
        </label>
        <input type="text" name="name" className="input input-bordered" />
      </div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text capitalize tracking-wider">address</span>
        </label>
        <input type="text" name="address" className="input input-bordered" />
      </div>
      <div>
        <SubmitButton text='Place Your Order'/>
      </div>
    </Form>
  );
}

export default CheckoutForm;
