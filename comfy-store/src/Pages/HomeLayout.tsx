import { Link, Outlet } from "react-router-dom";
import cartIcon from "../assets/cart.svg";
import mode from "../assets/mode.svg";
import { Header, Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
