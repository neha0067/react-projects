import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4" method="post">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email" name="identifier" defaultValue="test@test.com"/>
        <FormInput type="password" label="Password" name="password" defaultValue="password" />
        <div className="mt-4">
          <SubmitButton text="Login"/>
        </div>
        <button className="btn btn-secondary" type="button">Guest User</button>
        <p className="text-center">
          Not a member yet? <Link className="ml-2 link link-hover link-primary" to="/register">Register</Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
