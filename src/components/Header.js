import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {

  let hamburger = <Navigation />;

  return (
    <div className="sticky w-full top-0 z-50 flex justify-between bg-white items-center p-2 lg:px-5 shadow-md">
      <Link to="/" className="font-licorice text-4xl font-bold text-gray-800">
        Shea's Esthetics
      </Link>
      <div className="justify-end hidden md:flex lg:flex">
        <ul>
          <Link
            to="/services"
            className="font-licorice hover:text-4xl transition-transform ease-in-out text-gray-800 font-bold text-3xl ml-5"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="font-licorice hover:text-4xl transition-transform ease-in-out text-gray-800 font-bold text-3xl ml-10"
          >
            About Shea
          </Link>
          <Link
            to="/contact"
            className="font-licorice hover:text-4xl transition-transform ease-in-out text-gray-800 font-bold text-3xl ml-10"
          >
            Contact Me
          </Link>
          
        </ul>
      </div>
      <div className="flex justify-end md:hidden lg:hidden">{hamburger}</div>
    </div>
  );
}

export default Header;
