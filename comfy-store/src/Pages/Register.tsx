import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";

function Register() {
  return (
    <section className="h-screen grid place-content-center">
      <Form className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4" method="POST">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="text" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitButton text="register"/>
        </div>
        <p className="text-center">
          Already a member? <Link className="ml-2 link link-hover link-primary" to="/login">Login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register