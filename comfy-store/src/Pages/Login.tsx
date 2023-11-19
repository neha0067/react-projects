import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";

export const action = (store: any) => {
  return async ({request} : any) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch(true).post('/auth/local', data);

      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');
      return redirect('/');
    } catch (error: any) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      toast.error(errorMessage);
      return null;
    }
  }
}

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch(true).post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  };
  
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4" method="post">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email" name="identifier" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitButton text="Login"/>
        </div>
        <button className="btn btn-secondary" type="button" onClick={loginAsGuestUser}>Guest User</button>
        <p className="text-center">
          Not a member yet? <Link className="ml-2 link link-hover link-primary" to="/register">Register</Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
