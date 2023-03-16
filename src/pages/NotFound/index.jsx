import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="font-bold text-6xl p-2">404 Page Not Found</h1>
        <Link to="/">
          <h1 className="font-bold text-3xl p-2">
            Click Me To Go To Home Page
          </h1>
        </Link>
      </div>
    </>
  );
}
