import Me from "../assets/pro_headshot.jpg";
import EmailImg from "../assets/mail.svg";
import ResumeImg from "../assets/resume.svg";
import { Typewriter } from "react-simple-typewriter";

function Intro() {
  return (
    <div id="intro">
      <div className="h-[97vh] bg-[#f7f2ead8] flex items-center">
        {/* container for BOTH card + image */}
        <div className="md:w-full lg:w-7xl mx-auto px-6 flex items-center justify-center gap-10 lg:gap-60">
          {/* left card */}
          <div className="flex-1 bg-gray-100 rounded-3xl">
            {/* ⬇️ NO background here */}
            <div className="rounded-3xl md:h-[35vh] shadow-lg/20 overflow-hidden">
              {/* ⬇️ ONLY the name section is white */}
              <div className="bg-white text-left px-10 py-6 border-b-3 border-gray-200">
                <p className="text-5xl font-medium text-[#0084ff]">
                  <span className="text-gray-400 font-light">I am </span>
                  <Typewriter
                    words={["Charles Luo"]}
                    loop={1}
                    cursor={true}
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    
                  />
                </p>
              </div>

              {/* ⬇️ transparent section */}
              <div className="font-inter border-t border-gray-200 pb-15 pt-7 px-10">
                <p className="pb-5">
                  Currently pursuing a degree in Computer Science and an
                  aspiring Frontend Developer and Software Engineer.
                </p>

                <div className="flex mt-5">
                  <button
                    className="
                  group inline-flex items-center gap-2
                  cursor-pointer transition-colors duration-300 ease-in-out
                  hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff]
                  mr-5 shadow-lg/15
                  text-[#0084ff] bg-white border border-gray-300
                  px-3 py-1.5 rounded-3xl ring-[#0084ff] ring-1
                  "
                  >
                    <img
                      src={ResumeImg}
                      className="
                    w-5
                    transition duration-300 ease-in-out
                    group-hover:invert group-hover:brightness-0
                    "
                      alt="Resume icon"
                    />
                    View Resume
                  </button>

                  <button
                    className="
                  group inline-flex items-center gap-2
                  cursor-pointer px-3 py-1 rounded-3xl border border-gray-300 bg-white
                  text-[#0084ff] shadow-lg/15
                  hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff]
                  transition-colors duration-300 ease-in-out ring-[#0084ff] ring-1
                  "
                  >
                    <img
                      src={EmailImg}
                      className="
                    w-6
                    transition duration-300 ease-in-out
                    group-hover:invert group-hover:brightness-0
                    "
                      alt="Email icon"
                    />
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right image */}
          <img
            src={Me}
            className="w-40 md:w-72 lg:w-80 shadow-lg/20 rounded-3xl object-cover ring-white ring-4"
            alt="Me"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
