import { Helmet } from "react-helmet";
import MediumPosts from "../components/MediumPosts";

const Blogs = () => {
  return (
    <div className="container mx-auto mt-8">
      <Helmet>
        <title>Blogs | Chums AI</title>
        <meta name="description" content="Blogs" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="flex justify-between mt-2 mb-4">
        <h4 className="text-left text-3xl font-bold">Most Recent Post</h4>
        <a
          href="https://medium.com/@chumsai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center"
        >
          View All Posts
          <span className="ml-1">&#8594;</span>
        </a>
      </div>
      <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
      <MediumPosts />
    </div>
  );
};

export default Blogs;
