import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            {/* <a className="nav-link active" href="#">
              Home
            </a> */}
          </li>
          <li>
            <Link to="/users">Users</Link>
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
