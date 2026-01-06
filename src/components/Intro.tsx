import Me from "../assets/pro_headshot.jpg";
import EmailImg from "../assets/mail.svg";
import ResumeImg from "../assets/resume.svg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

function Intro() {
  return (
    <section id="intro" className="bg-[#f7f2ead8]">
      <div className="min-h-screen flex flex-col justify-center relative py-20">
        {/* Card + Image */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-24">
          {/* Left card */}
          <div className="w-full lg:flex-1 pb-4 lg:pb-6 bg-gray-100 rounded-3xl shadow-lg/20 overflow-hidden">
            {/* Name section */}
            <div className="bg-white text-left px-6 sm:px-10 py-6 border-b border-gray-200">
              <p className="font-medium text-[#0084ff] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                <span className="text-gray-400 font-light">I am </span>
                <Typewriter
                  words={["Charles Luo"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>

            {/* Description */}
            <div className="font-inter border-t border-gray-200 px-6 sm:px-10 py-7">
              <p className="text-gray-700 leading-relaxed">
                I'm an aspiring Frontend Developer/Software Engineer, currently pursuing a degree in Computer Science at UC Riverside.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                {/* Resume */}
                <button
                  type="button"
                  className="
                    group inline-flex items-center justify-center gap-2
                    cursor-pointer transition-colors duration-300 ease-in-out
                    hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff]
                    shadow-lg/15
                    text-[#0084ff] bg-white border border-gray-300
                    px-4 py-2 rounded-3xl ring-[#0084ff] ring-1
                    w-full sm:w-auto
                  "
                >
                  <img
                    src={ResumeImg}
                    className="
                      w-5 transition duration-300 ease-in-out
                      group-hover:invert group-hover:brightness-0
                    "
                    alt="Resume icon"
                  />
                  View Resume
                </button>

                {/* Email */}
                <button
                  type="button"
                  className="
                    group inline-flex items-center justify-center gap-2
                    cursor-pointer
                    border border-gray-300 bg-white
                    text-[#0084ff] shadow-lg/15
                    hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff]
                    transition-colors duration-300 ease-in-out
                    ring-[#0084ff] ring-1
                    px-4 py-2 rounded-3xl
                    w-full sm:w-auto
                  "
                >
                  <img
                    src={EmailImg}
                    className="
                      w-6 transition duration-300 ease-in-out
                      group-hover:invert group-hover:brightness-0
                    "
                    alt="Email icon"
                  />
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[330px] flex justify-center lg:justify-end">
            <img
              src={Me}
              className="w-56 sm:w-72 lg:w-full shadow-lg/20 rounded-3xl object-cover ring-white ring-4"
              alt="Me"
            />
          </div>
        </div>

        {/* Scroll Down */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <a href="#about">
            <button
              type="button"
              className="px-10 sm:px-16 md:px-50 py-1 rounded-full bg-[#0084ff] text-white shadow-lg cursor-pointer hover:scale-105 transition"
              aria-label="Scroll to About section"
            >
              ↓
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
