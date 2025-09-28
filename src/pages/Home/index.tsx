import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Welcome to Home Page
      </h1>
      <Link
        to="/products"
        className="px-6 py-3 bg-slate-500 text-white rounded-lg shadow hover:bg-slate-600 transition"
      >
        Go to Products
      </Link>
    </div>
  );
};

export default Home;
