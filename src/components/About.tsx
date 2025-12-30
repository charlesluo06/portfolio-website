import meSunImg from "../assets/meSun.png"

function About() {
  return (
    <div className="bg-gray-100">
      <div className="h-[50vh] inset-shadow-sm/20 rounded-4xl bg-gray-100 shadow-md/25 w-full flex items-center p-15 lg:px-60">
      <div className="w-1/3 lg:w-1/4 flex">
        <img src={meSunImg}/>
      </div>
        <div className="w-3/5 lg:w-1/2 ml-auto text-left">
          <p className="text-3xl font-semibold mb-15">About</p>
          <p>
            Hi! My name is Charles Luo. I’m a second-year Computer Science student at the
            University of California, Riverside. On my free time, I enjoy
            listening to music, gaming, and working out. Thank you for
            stopping by!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
