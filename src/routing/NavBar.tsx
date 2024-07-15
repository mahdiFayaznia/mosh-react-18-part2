import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar bg-base-100"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <a className="btn btn-ghost" href="#">
        My App
      </a>
      <div className="flex-none" id="navbarNav">
        <ul className="menu menu-horizontal">
          <li>
            {/* override classes when link is active */}
            {/* <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink> */}
            <NavLink to="/">Home</NavLink>
            {/* <Link to="/">Home</Link> */}
            {/* <a className="nav-link active" href="#">
              Home
            </a> */}
          </li>
          <li>
            {/* override classes when link is active */}
            {/* <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Users
            </NavLink> */}
            <NavLink to="/users">Users</NavLink>
            {/* <a className="nav-link" href="#">
              Users
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
