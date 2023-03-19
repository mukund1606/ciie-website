import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-slate-100 text-gray-600 dark:bg-black dark:text-slate-100">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5 rounded-full text-slate-100"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li className="hover:scale-110 hover:text-[#0047ab] dark:hover:text-[#0769ae] ease-in duration-600 transition">
              <Link rel="noopener noreferrer" yo="#">
                Terms of Use
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-[#0047ab] dark:hover:text-[#0769ae] tease-in duration-600 transition">
              <Link to="#" rel="noopener noreferrer">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li className="hover:scale-110 hover:text-[#0047ab] dark:hover:text-[#0769ae] tease-in duration-600 transition">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to="https://www.instagram.com/ciie.srmuh/"
            >
              Instagram
            </Link>
          </li>
          <li className="hover:scale-110 hover:text-[#0047ab] dark:hover:text-[#0769ae] tease-in duration-600 transition">
            <Link rel="noopener noreferrer" to="#">
              Facebook
            </Link>
          </li>
          <li className="hover:scale-110 hover:text-[#0047ab] dark:hover:text-[#0769ae] tease-in duration-600 transition">
            <Link rel="noopener noreferrer" to="#">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
