import EmailImg from "../assets/mail.svg";
import LocationImg from "../assets/location.svg";
import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";
import vsa from "../assets/vsa.png"
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="py-16 h-screen" id="contact">
      {/* Title */}
      <div className="flex flex-col items-center">
        <p className="text-3xl sm:text-4xl font-semibold text-[#0084ff]">
          Reach Out
        </p>

        {/* Horizontal underline */}
        <div className="drop-shadow-lg/20 bg-[#0084ff] ring-3 ring-white w-32 sm:w-56 md:w-1/2 h-1.5 mt-3 rounded-full" />
      </div>

      {/* Bottom row */}
      <div className="mt-14 w-6/7 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 bg-white border-2 border-gray-200 rounded-3xl shadow-lg/20 p-6 hover:-translate-y-1 transition">
            <p className="text-2xl font-semibold text-[#0084ff] mb-4">
              Contact Information
            </p>

            <div className="space-y-5 mt-5">
              <div className="flex items-center gap-4">
                <img src={EmailImg} alt="Email" className="w-10 opacity-70" />
                <div className="flex flex-col">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">cluo034@ucr.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={LocationImg}
                  alt="Location"
                  className="w-10 opacity-70"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Riverside, CA, USA</p>
                </div>
              </div>
            </div>

            <div className="flex mt-5 gap-5">
              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/charles-luo-5b1755317/"
                >
                  <img src={LinkedInImg} className="w-8" />
                </Link>
              </div>

              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link target="_blank" to="https://github.com/charlesluo06">
                  <img src={GithubImg} className="w-8" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative w-4 flex items-center justify-center">
            <div className="w-2 h-full bg-gray-200 rounded-full inset-shadow-sm/20" />
          </div>

          {/* Right: Resume (ProjectCard-style) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <div
              className="
                bg-white h-full rounded-3xl overflow-hidden shadow-lg/30
                flex flex-col border-2 border-gray-200 cursor-pointer
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-xl/40
              "
            >
              {/* Image Header */}
              <div className="h-3/7 relative border-b-3 border-gray-300 shadow-md/20">
                <img
                  src={vsa}
                  alt="Resume preview"
                  className="h-full w-full object-cover"
                />

                <div className="absolute top-3 right-5 bg-white text-[#0084ff] text-sm px-3 py-1 rounded-full shadow-md/20">
                  Resume
                </div>
              </div>

              {/* Content */}
              <div className="text-center px-8">
                <p className="py-4 text-[25px] font-semibold text-[#0084ff]">
                  My Resume
                </p>
                <p className="text-gray-800">
                  Click here to view my full resume.
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center px-6">

                <button
              type="button"
              className="px-6 py-2 rounded-full mt-5 bg-[#0084ff] text-white font-semibold shadow-lg/20 hover:scale-105 transition"
            >
              View Resume
            </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
