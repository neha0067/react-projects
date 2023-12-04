import { Outlet, useNavigation } from "react-router-dom";
import { Loading, Navbar, Footer } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="grow">
          <Outlet />
        </section>
      )}
      <Footer />
    </div>
  );
}

export default HomeLayout;
