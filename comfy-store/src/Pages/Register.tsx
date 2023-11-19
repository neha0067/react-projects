import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }: any) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch(true).post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-content-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4"
        method="POST"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="Username"
          name="username"
          defaultValue="John Doe"
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          defaultValue="john.doe@gmail.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="JohnDoes"
        />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link className="ml-2 link link-hover link-primary" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
