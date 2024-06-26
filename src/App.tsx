import { Link, Outlet } from "react-router-dom";

function App() {
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

export default App;
