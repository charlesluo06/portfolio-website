import "./App.css";
import Me from "./assets/pro_headshot.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      {/* container for BOTH card + image */}
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-center gap-10 lg:gap-30">
        {/* left card */}
        <div className="flex-1 max-w-xl">
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
                Currently pursuing a degree in Computer Science and an aspiring
                Frontend Developer and Software Engineer.
              </p>

              <div className="flex mt-5">
                <button
                  className="
                 cursor-pointer transition-colors duration-300 ease-in-out
                 hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff] mr-5 shadow-lg/15 
                 text-[#0084ff] bg-white border border-gray-200 px-2 py-1.5 rounded-3xl"
                >
                  View Resume
                </button>
                <button
                  className="
                cursor-pointer px-2 py-1 rounded-3xl border border-gray-200 bg-white
                text-[#0084ff] shadow-lg/15
                hover:text-white hover:bg-[#0084ff] hover:border-[#0084ff]
                transition-colors duration-300 ease-in-out"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right image */}
        <img src={Me} className="w-72 rounded-3xl object-cover" alt="Me" />
      </div>
    </div>
  );
}

export default App;
