import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  // useParams()
  const params = useParams();

  console.log("- params -", params);
  // /useParams()

  // useSearchParams()
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("- searchParams.toString() -", searchParams.toString());
  console.log("- searchParams.get(name) -", searchParams.get("name"));
  console.log("- searchParams.get(family) -", searchParams.get("family"));
  // /useSearchParams()

  // useLocation()
  const location = useLocation();

  console.log("- location -", location);
  // /useLocation()

  return <p>User {params.id}</p>;
};

export default UserDetail;
