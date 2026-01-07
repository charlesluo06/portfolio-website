import EmailImg from "../assets/mail.svg";
import LocationImg from "../assets/location.svg";
import ResumeImg from "../assets/resumeBlue.svg";
import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";
import DownloadImg from "../assets/download.svg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="py-16 h-150" id="contact">
      {/* Title */}
      <div className="flex flex-col items-center">
        <p className="text-3xl sm:text-4xl font-semibold text-[#0084ff]">
          Reach Out
        </p>

        {/* Horizontal underline */}
        <div className="drop-shadow-lg/20 bg-[#0084ff] border-b-3 mx-auto border-white w-32 sm:w-56 md:w-1/2 h-2 mt-3 rounded-full" />
      </div>

      {/* Bottom row */}
      <div className="mt-14 w-6/7 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch gap-8 justify-center pl-16">
          {/* Left: Contact Info */}
          <div className="flex-[.8] flex-col h-full bg-white border-2 border-gray-200 rounded-3xl shadow-lg/20 p-6 hover:-translate-y-1 transition flex">
            {/* Left: Text Content */}
            <div className="flex flex-col">
              <p className="text-2xl text-center font-semibold text-[#0084ff] mb-4">
                Contact Information
              </p>

              <div className="flex gap-10 mt-2 justify-center">
                <div className="flex items-center justify-center gap-4">
                  <img src={EmailImg} alt="Email" className="w-10 opacity-70" />
                  <div className="flex flex-col">
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">cluo034@ucr.edu</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={LocationImg}
                    alt="Location"
                    className="w-10 opacity-70"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Riverside, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <div className="h-0.5 w-1/2 bg-[#0084ff] rounded-full shadow-md/20" />
            </div>

            {/* Right: Social Icons */}
            <div className="mt-5 flex gap-8 items-center justify-center">
              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/charles-luo-5b1755317/"
                >
                  <img src={LinkedInImg} className="w-10" />
                </Link>
              </div>

              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link target="_blank" to="https://github.com/charlesluo06">
                  <img src={GithubImg} className="w-10" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative w-4 flex ml-10">
            <div className="w-2 h-full bg-gray-200 rounded-full inset-shadow-sm/20" />
          </div>

          {/* Right: Resume (ProjectCard-style) */}
          <div className="flex-[.8] flex mt-12">
            {/* Content */}
            <div className="px-6">
              <div className="flex items-center gap-2 py-4">
                <img src={ResumeImg} alt="Resume icon" className="size-8" />
                <p className="text-[30px] font-semibold text-[#0084ff]">
                  My Resume
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="px-5 cursor-pointer flex py-1.5 rounded-full bg-[#0084ff] text-white font-semibold shadow-lg/20 hover:scale-105 transition"
                >
                  <img src={DownloadImg} className="w-5 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
