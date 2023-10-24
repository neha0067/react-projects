import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="align-element text-right">
        <Link className="p-4" to='/login' >Sign in / Guest</Link>
        <Link className="p-4" to='/register' >Create Account</Link>
      </div>
    </div>
  );
}

export default Header;
