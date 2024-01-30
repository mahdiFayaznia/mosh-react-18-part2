// import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

const PostList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) return <p>{error}</p>;

  const { data: posts, error, isLoading } = usePosts();

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="menu bg-base-200 w-full rounded-box">
      {posts?.map((post) => (
        <li key={post.id}>
          <a>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
