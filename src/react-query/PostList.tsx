// import axios from "axios";
import { useEffect, useId, useState } from "react";
import usePosts from "./hooks/usePosts";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

const PostList = () => {
  const [userId, setUserId] = useState<number>();

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) return <p>{error}</p>;

  const { data: posts, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs mb-5"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value="">All users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="menu bg-base-200 w-full rounded-box">
        {posts?.map((post) => (
          <li key={post.id}>
            <a>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
