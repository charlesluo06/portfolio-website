import meSunImg from "../assets/meSun.png";
import SpotifyIcon from "../assets/spotify.svg";
import GymIcon from "../assets/gym.svg";
import GamingIcon from "../assets/gaming.png";

function About() {
  return (
    <div className="bg-[#f7f2ead8]">
      <div className="h-[50vh] rounded-4xl border-gray-200 border-2 bg-gray-100 shadow-lg/30 w-7/8 mx-auto flex items-center p-15 lg:px-50">
        {/* Image (Left) */}
        <div className="w-1/2 lg:w-2/5 ring-5 ring-white border-gray-200 border-2 rounded-full shadow-lg/20">
          <img src={meSunImg} />
        </div>

        {/* Right Side */}
        <div className="lg:w-4/5 w-3/5 ml-16 flex flex-col gap-10">
          {/* Top big container */}
          <div className="shadow-md/20 bg-white border-gray-200 border px-3 py-4 lg:px-10 lg:py-5 rounded-3xl">
            <p className="text-3xl font-semibold mb-5 text-[#0084ff]">About</p>
            <p className="text-gray-700">
              Hi! My name is <span className="text-gray-900">Charles Luo.</span>{" "}
              I’m a second-year{" "}
              <span className="text-gray-900">Computer Science</span> student at
              the <br></br>
              <span className="text-gray-900">
                University of California, Riverside.
              </span>
            </p>
          </div>
          {/* Bottom row of smaller containers */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col justify-between shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-3 rounded-2xl hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105">
              <img src={SpotifyIcon} className="w-15" />
              <p className="font-semibold text-[#0084ff] text-sm">Music</p>
            </div>

            <div className="flex-1 flex flex-col justify-between shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-3 rounded-2xl hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105">
              <img src={GymIcon} className="w-15" />
              <p className="font-semibold text-[#0084ff] text-sm">Workout</p>
            </div>

            <div className="flex-1 flex flex-col justify-between shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-3 rounded-2xl hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105">
              <img src={GamingIcon} className="w-15" />
              <p className="font-semibold text-[#0084ff] text-sm">Music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
