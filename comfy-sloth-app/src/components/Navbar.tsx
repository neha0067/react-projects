import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

function Navbar() {

  const numItemsInCart = useSelector((state: any) => state.cartState.numItemsInCart); 

    function handleTheme() {
        console.log('theme handled')
    }

  return (
    <nav className="bg-gray-700 text-slate-100">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex">
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg"
              alt="comfy sloth"
            />
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className='h-6 w-6'/>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-lg">
                <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsMoonFill className="swap-off h-4 w-4" />
            <BsSunFill className="swap-on h-4 w-4" />
          </label>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
          <NavLink to='/login' className='ml-4 text-xl btn btn-ghost'>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
