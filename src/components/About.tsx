import meSunImg from "../assets/meSun.png";
import SpotifyIcon from "../assets/spotify.svg";
import GymIcon from "../assets/gym.svg";
import FoodIcon from "../assets/food.svg";
import { motion } from "motion/react";

function About() {
  return (
    <motion.div
  initial={{ y: 60, opacity: 1 }}
  whileInView={{ y: -20, opacity: 1 }}
  viewport={{ once: true, amount: .3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="bg-[#f7f2ead8]"
>

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
            {/* Music */}
            <div
              className="group flex-1 flex flex-col items-center shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-6 rounded-2xl
                hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105"
            >
              <img
                src={SpotifyIcon}
                className="w-15 lg:w-1/3 lg:mb-4 transition-transform duration-300 group-hover:-translate-y-2"
              />
              <p className="font-semibold text-[#0084ff] lg:text-xl">Music</p>
              <p className="hidden lg:block text-sm text-gray-700 text-center">
                I'm currently listening to R&B, EDM, and Pop.
              </p>
            </div>

            {/* Lifting */}
            <div
              className="group flex-1 flex flex-col items-center shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-6 rounded-2xl
                hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105"
            >
              <img
                src={GymIcon}
                className="w-15 lg:w-1/3 lg:mb-4 transition-transform duration-300 group-hover:-translate-y-2"
              />
              <p className="font-semibold text-[#0084ff] lg:text-xl">Lifting</p>
              <p className="hidden lg:block text-sm text-gray-700 text-center">
                Fitness is very important to me and staying active.
              </p>
            </div>

            {/* Food */}
            <div
              className="group flex-1 flex flex-col items-center shadow-md/20 gap-2 bg-white border-gray-200 border px-3 py-6 rounded-2xl
                hover:ring-2 hover:ring-[#0084ff] transition ease-in-out duration-120 hover:scale-105"
            >
              <img
                src={FoodIcon}
                className="w-15 lg:w-1/3 lg:mb-4 transition-transform duration-300 group-hover:-translate-y-2"
              />
              <p className="font-semibold text-[#0084ff] lg:text-xl">Food</p>
              <p className="hidden lg:block text-sm text-gray-700 text-center">
                I love going out and exploring new food spots!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
