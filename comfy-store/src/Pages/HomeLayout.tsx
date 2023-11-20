import { Navigation, Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

function HomeLayout() {
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
