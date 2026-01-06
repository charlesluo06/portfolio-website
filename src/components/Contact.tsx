import EmailImg from "../assets/mail.svg";
import LocationImg from "../assets/location.svg";
import LinkedInImg from "../assets/linkedin.svg";
import GithubImg from "../assets/github.svg";
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

      {/* Bottom row: left | divider | right */}
      <div className="mt-14 w-6/7 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 bg-white border-2 border-gray-200 rounded-3xl shadow-lg/20 p-6 hover:-translate-y-1 transition">
            <p className="text-2xl font-semibold text-[#0084ff] mb-4">
              Contact Information
            </p>

            <div className="space-y-5 mt-5">
              <div className="flex items-center gap-4">
                {/* Email icon */}
                <img src={EmailImg} alt="Email" className="w-10 opacity-70" />

                {/* Email text */}
                <div className="flex flex-col">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">cluo034@ucr.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Email icon */}
                <img
                  src={LocationImg}
                  alt="Location"
                  className="w-10 opacity-70"
                />

                {/* Email text */}
                <div className="flex flex-col">
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Riverside, CA, USA</p>
                </div>
              </div>
            </div>
            <div className="flex mt-5 gap-5">
              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link target="blank" to="https://www.linkedin.com/in/charles-luo-5b1755317/">
                  <img src={LinkedInImg} className="w-8" />
                </Link>
              </div>
              <div className="p-2 border-2 border-gray-100 shadow-md/20 rounded-2xl">
                <Link target="blank" to="https://github.com/charlesluo06">
                  <img src={GithubImg} className="w-8" />
                </Link>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="relative w-4 flex items-center justify-center">
            <div className="w-2 h-full bg-gray-200 rounded-full inset-shadow-sm/20"></div>
          </div>

          {/* Right: Resume */}
          <div className="flex-1 bg-white border-2 border-gray-200 rounded-3xl shadow-lg/20 p-6 hover:-translate-y-1 transition">
            <p className="text-2xl font-semibold text-[#0084ff] mb-4">Resume</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              View or download my resume for a detailed overview of my
              experience and skills.
            </p>

            <button
              type="button"
              className="px-6 py-2 rounded-full bg-[#0084ff] text-white font-semibold shadow-lg/20 hover:scale-105 transition"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
