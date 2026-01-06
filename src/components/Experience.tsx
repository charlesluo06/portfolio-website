import ACMImg from "../assets/acm.png";

function Experience() {
  return (
    <div className="h-140 scroll-mt-25" id="experience">
      {/* Title */}
      <div className="flex justify-center mt-20">
        <p className="text-3xl sm:text-4xl font-semibold text-[#0084ff]">
          Experience
        </p>
        
      </div>
      <div className="drop-shadow-lg/20 bg-[#0084ff] ring-3 mx-auto ring-white w-32 sm:w-56 md:w-1/2 h-1.5 mt-3 rounded-full" />

      {/* Experience container */}
      <div
        className="
          group relative mt-15 w-6/7 mx-auto
          flex items-center bg-white rounded-lg
          shadow-md/15 transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-xl/30
        "
      >
        {/* TOP animated border */}
        <div className="absolute top-0 left-0 h-1.5 w-full bg-gray-300 rounded-t-xl overflow-hidden">
          <div
            className="
              h-full w-full bg-[#0084ff]
              scale-x-0 origin-center
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
          />
        </div>

        {/* BOTTOM animated border */}
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gray-300 rounded-b-xl overflow-hidden">
          <div
            className="
              h-full w-full bg-[#0084ff]
              scale-x-0 origin-center
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
          />
        </div>

        {/* Logo + Label */}
        <div className="w-1/5 ml-15 flex flex-col items-center justify-center gap-3 py-10">
          <img src={ACMImg} alt="ACM" className="w-2/3 object-contain" />

          <p className="text-center text-xl font-semibold text-gray-900 leading-snug">
            Association of Computing Machinery
          </p>
        </div>

        {/* Content */}
        <div className="w-4/6 flex items-center pl-12 py-10">
          <div className="w-full">
            <div className="px-6 py-4 flex flex-col gap-10 rounded-xl">
              
              {/* Role + date */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-semibold text-[#0084ff]">
                    Frontend Developer{" "}
                    <span className="font-extralight text-gray-400">
                      - Riverside, CA
                    </span>
                  </p>
                  <p className="text-sm mb-1 px-2 text-gray-600">
                    September 2025 - Present
                  </p>
                </div>

                {/* ✅ Blue underline (restored) */}
                <div className="h-0.5 w-full bg-[#0084ff] rounded-full" />
              </div>

              {/* Bullets */}
              <ul className="list-disc list-inside text-gray-800 space-y-5">
                <li>
                  Built and maintained responsive UI components using React and
                  Tailwind CSS.
                </li>
                <li>
                  Collaborated with 15 developers in weekly Scrum meetings to implement issues and updates.
                </li>
                <li>
                  Improved usability and performance across multiple screen
                  sizes and devices.
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
