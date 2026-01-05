import ACMImg from "../assets/acm.png";

function Experience() {
  return (
    <section className="h-screen">
      {/* Title */}
      <div className="flex justify-center mt-20">
        <p className="text-3xl sm:text-4xl font-semibold text-[#0084ff]">
          Experience
        </p>
      </div>

      {/* Experience container */}
      <div className="h-3/7 border-y-6 mt-5 w-6/7 border-gray-300 mx-auto flex items-center bg-white shadow-md/20 rounded-xl ">
        {/* Logo + Label */}
        <div className="w-1/5 ml-15 flex flex-col items-center justify-center gap-3">
          <img src={ACMImg} alt="ACM" className="w-2/3 object-contain" />

          <p className="text-center text-xl font-semibold text-gray-900 leading-snug">
            Association of Computing Machinery
          </p>
        </div>

        {/* Content */}
        <div className="w-4/6 flex items-center pl-12">
          <div className="w-full">
            <div className=" px-6 py-4 flex flex-col gap-10 border-gray-200 h-65 rounded-xl">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-semibold text-[#0084ff]">
                    Frontend Developer
                  </p>
                  <p className="text-sm mb-1 px-2 text-gray-600">
                    September 2025 - December 2025
                  </p>
                </div>

                {/* Blue underline */}
                <div className="h-0.5 w-full bg-[#0084ff] rounded-full" />
              </div>

              {/* Bullets */}
              <ul className="list-disc list-inside text-gray-800 space-y-5">
                <li>
                  Built and maintained responsive UI components using React and
                  Tailwind CSS.
                </li>
                <li>
                  Collaborated with designers and backend developers to deliver
                  polished user-facing features.
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
    </section>
  );
}

export default Experience;
