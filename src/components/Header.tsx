import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";
import LightImg from "../assets/light.svg";
import DarkImg from "../assets/dark.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        fixed top-5 left-1/2 -translate-x-1/2
        z-50 h-14 w-7/8 lg:w-5/7
        flex items-center lg:px-20 justify-between
        px-4 sm:px-10 rounded-4xl shadow-md/15
        bg-white dark:bg-slate-900
        border-2 border-gray-200 dark:border-slate-700
      "
    >
      <div className="font-semibold text-2xl px-2 py-0.5">
        <a href="#intro">
          <p className="text-[#0084ff] hover:scale-110 transition ease-in-out duration-100">
            Charles Luo
          </p>
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden lg:flex gap-3">
          <a href="#intro">
            <p className="text-gray-700 dark:text-gray-200 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white dark:hover:bg-slate-800 px-2">
              Home
            </p>
          </a>
          <a href="#about">
            <p className="text-gray-700 dark:text-gray-200 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white dark:hover:bg-slate-800 px-2">
              About
            </p>
          </a>
          <a href="#projects">
            <p className="text-gray-700 dark:text-gray-200 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white dark:hover:bg-slate-800 px-2">
              Projects
            </p>
          </a>
          <a href="#experience">
            <p className="text-gray-700 dark:text-gray-200 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white dark:hover:bg-slate-800 px-2">
              Experience
            </p>
          </a>
          <a href="#contact">
            <p className="text-gray-700 dark:text-gray-200 rounded-4xl hover:inset-shadow-sm/20 transition ease-in-out duration-150 hover:bg-white dark:hover:bg-slate-800 px-2">
              Contact
            </p>
          </a>
        </div>

        <span className="flex gap-3 lg:pl-5">
          <Link target="_blank" to="https://www.linkedin.com/in/charles-luo-5b1755317/">
            <img
              src={LinkedInImg}
              className="w-6 hover:scale-125 transition ease-in-out duration-100"
              alt="LinkedIn"
            />
          </Link>

          <Link target="_blank" to="https://github.com/charlesluo06">
            <img
              src={GithubImg}
              className="w-6 hover:scale-125 transition ease-in-out duration-100"
              alt="GitHub"
            />
          </Link>

          <img
            onClick={toggleTheme}
            src={theme === "dark" ? DarkImg : LightImg}
            className="w-6 hover:scale-125 transition ease-in-out duration-100 cursor-pointer"
            alt="Theme toggle"
          />
        </span>
      </div>
    </div>
  );
}

export default Header;
