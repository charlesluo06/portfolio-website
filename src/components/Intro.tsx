import Me from "../assets/pro_headshot.jpg";
import EmailImg from "../assets/mail.svg";
import ResumeImg from "../assets/resume.svg";

function Intro() {
  return (
    <>
      <div className="min-h-screen bg-[#f0f0f0] flex items-center">
        {/* container for BOTH card + image */}
        <div className="w-full max-w-6xl mx-auto lg:px-16 px-6 flex items-center justify-center gap-10 lg:gap-50">

          {/* left card */}
          <div className="flex-1 bg-gray-100 rounded-3xl max-w-xl">
            {/* ⬇️ NO background here */}
            <div className="rounded-3xl shadow-xl/15 overflow-hidden">
              {/* ⬇️ ONLY the name section is white */}
              <div className="bg-white text-left px-10 py-6 border-b-3 border-gray-200">
                <p className="text-5xl font-medium text-[#0084ff]">
                  <span className="text-gray-400 font-light">I am </span>
                  Charles Luo
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
                  px-3 py-1.5 rounded-3xl
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
                  transition-colors duration-300 ease-in-out
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
          <img src={Me} className="w-72 shadow-lg/30 rounded-3xl object-cover" alt="Me" />
        </div>
      </div>
    </>
  );
}

export default Intro;
