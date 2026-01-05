import meSunImg from "../assets/meSun.png";
import SpotifyIcon from "../assets/spotify.svg";
import GymIcon from "../assets/gym.svg";
import FoodIcon from "../assets/food.svg";
import { motion } from "motion/react";

function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#f7f2ead8] scroll-mt-45 py-10"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border-2 border-gray-200 bg-gray-100 shadow-lg/30 p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image */}
          <div className="shrink-0 w-40 sm:w-56 lg:w-72 rounded-full ring-4 ring-white border-2 border-gray-200 shadow-lg/20 overflow-hidden">
            <img
              src={meSunImg}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:gap-10 w-full">

            {/* About Text */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-md/20 px-5 py-5 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0084ff] mb-4">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hi! My name is{" "}
                <span className="text-gray-900 font-medium">Charles Luo</span>. I’m a
                second-year{" "}
                <span className="text-gray-900 font-medium">
                  Computer Science
                </span>{" "}
                student at{" "}
                <span className="text-gray-900 font-medium">
                  the University of California, Riverside.
                </span>
              </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* Music */}
              <div className="group flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-6 shadow-md/20 hover:ring-2 hover:ring-[#0084ff] transition hover:scale-[1.03]">
                <img
                  src={SpotifyIcon}
                  alt="Music"
                  className="w-14 sm:w-16 lg:w-1/3 transition-transform duration-300 group-hover:-translate-y-2"
                />
                <p className="font-semibold text-[#0084ff] lg:text-xl">
                  Music
                </p>
                <p className="hidden lg:block text-sm text-gray-700 text-center">
                  I'm currently listening to R&B, EDM, and Pop.
                </p>
              </div>

              {/* Lifting */}
              <div className="group flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-6 shadow-md/20 hover:ring-2 hover:ring-[#0084ff] transition hover:scale-[1.03]">
                <img
                  src={GymIcon}
                  alt="Lifting"
                  className="w-14 sm:w-16 lg:w-1/3 transition-transform duration-300 group-hover:-translate-y-2"
                />
                <p className="font-semibold text-[#0084ff] lg:text-xl">
                  Lifting
                </p>
                <p className="hidden lg:block text-sm text-gray-700 text-center">
                  Fitness and staying active are very important to me.
                </p>
              </div>

              {/* Food */}
              <div className="group flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-6 shadow-md/20 hover:ring-2 hover:ring-[#0084ff] transition hover:scale-[1.03]">
                <img
                  src={FoodIcon}
                  alt="Food"
                  className="w-14 sm:w-16 lg:w-1/3 transition-transform duration-300 group-hover:-translate-y-2"
                />
                <p className="font-semibold text-[#0084ff] lg:text-xl">
                  Food
                </p>
                <p className="hidden lg:block text-sm text-gray-700 text-center">
                  I love going out and exploring new food spots!
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
