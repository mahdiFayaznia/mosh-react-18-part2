import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* <a href="/users" className="btn btn-primary">
        Users
      </a> */}
      <Link to="/users" className="btn btn-primary">
        Users
      </Link>
    </>
  );
};

export default HomePage;
