import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/mint">Mint</Link>
        <Link to="/handles">Handles</Link>
      </nav>
      <Outlet />
    </div>
  );
}
