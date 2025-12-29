import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";

function Header() {
  return (
    <div className="
      fixed top-5 left-1/2 -translate-x-1/2
      z-50 h-14 w-7/8 lg:w-5/7
      flex items-center lg:px-20 justify-between
      px-10 rounded-4xl shadow-md/15 bg-white
    ">
      <div className="font-semibold text-xl px-3 py-0.5">
        <p className="text-[#0084ff]">Charles Luo</p>
      </div>
      <div className="flex gap-5">
        <p className="text-gray-700">Home</p>
        <p className="text-gray-700">About</p>
        <p className="text-gray-700">Projects</p>
        <p className="text-gray-700">Resume</p>
        <p className="text-gray-700">Contact</p>
        <span className="flex gap-3 pl-5">
          <img src={LinkedInImg} className="w-6" />
          <img src={GithubImg} className="w-6" />
        </span>
      </div>
    </div>
  );
}
export default Header;
