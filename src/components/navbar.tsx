import { Link, NavLink } from "react-router-dom";
import LensLogo from "@/assets/lens.svg";

export function Navbar() {
  return (
    <div className="[border-bottom:1px_solid_rgba(55,55,55,.1)]">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-lg font-medium">
          <img src={LensLogo} alt="Lens logo" />
          <h1>Lens</h1>
        </Link>
        <ul className="flex items-center text-[rgba(55,55,55,.4)] gap-1">
          <li>
            <NavLink to="/mint" className={({ isActive }) => (isActive ? "px-2 py-2 text-[#373737]" : "px-2 py-2")}>
              Mint
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" className={({ isActive }) => (isActive ? "px-2 py-2 text-[#373737]" : "px-2 py-2")}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/handles" className={({ isActive }) => (isActive ? "px-2 py-2 text-[#373737]" : "px-2 py-2")}>
              Handles
            </NavLink>
          </li>
          <li>
            <button className="px-4 py-2">•••</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
