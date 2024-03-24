import { Link, NavLink } from "react-router-dom";
import LensLogo from "@/assets/lens.svg";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <img src={LensLogo} alt="Lens logo" />
        <h1>Lens</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/mint">Mint</NavLink>
        </li>
        <li>
          <NavLink to="/mint">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/mint">Handles</NavLink>
        </li>
        <li>
          <button>•••</button>
        </li>
      </ul>
    </nav>
  );
}
