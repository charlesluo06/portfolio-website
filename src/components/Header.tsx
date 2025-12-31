import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="
      fixed top-5 left-1/2 -translate-x-1/2
      z-50 h-14 w-7/8 lg:w-5/7
      flex items-center lg:px-20 justify-between
      px-10 rounded-4xl shadow-md/15 bg-white
    "
    >
      <div className="font-semibold text-2xl px-2 py-0.5">
        <a href="#intro">
          <p className="text-[#0084ff] hover:scale-110 transition ease-in-out duration-100">
            Charles Luo
          </p>
        </a>
      </div>
      <div className="flex gap-3">
        <a href="#intro">
          <p className="text-gray-700 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white px-2">
            Home
          </p>
        </a>{" "}
        {/* CHANGE LATER MAYBE */}
        <a href="#about">
          <p className="text-gray-700 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white px-2">
            About
          </p>
        </a>
        <Link to="/">
          <p className="text-gray-700 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white px-2">
            Projects
          </p>
        </Link>
        <Link to="/">
          <p className="text-gray-700 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white px-2">
            Resume
          </p>
        </Link>
        <Link to="/">
          <p className="text-gray-700 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white px-2">
            Contact
          </p>
        </Link>
        <span className="flex gap-3 pl-5">
          <Link
            target="#"
            to="https://www.linkedin.com/in/charles-luo-5b1755317/"
          >
            <img
              src={LinkedInImg}
              className="w-6 hover:scale-125 transition ease-in-out duration-100"
            />
          </Link>
          <Link target="#" to="https://github.com/charlesluo06">
            <img
              src={GithubImg}
              className="w-6 hover:scale-125 transition ease-in-out duration-100"
            />
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Header;
