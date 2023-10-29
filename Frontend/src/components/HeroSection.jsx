import { Link } from "react-router-dom";
import { Clients } from "../Data/Data";
const HeroSection = () => {
  return (
    // container
    <div
      className=" lg:w-4/5 md:w-full box-border h-auto pt-24 flex justify-center items-center flex-col "
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 md:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden"
      >
        <div className=" blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="lg:w-full md:w-full  flex justify-center items-center lg:px-48 md:px-16 flex-col gap-6 px-6 text-center">
        <h1 className="lg:text-6xl md:text-6xl text-5xl text-textH text-center w-full h-auto font-bold">
          Every Bite, Every Story
          <span>Every Nourished Life</span>
        </h1>
        <p className=" text-gray-600 w-full">
          Discover the Nourished Life app, where every bite shares a unique
          story of health and wellness. Explore a world of nutrition and
          well-being through your meals. Start your journey to a healthier you
          today <span className="tracking-widest">!!!</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center md:flex-row box-border gap-6 mt-16 flex-col md:p-0 p-8 ">
        <button className="  md:w-32 h-11 w-full bg-btn rounded-3xl px-4 py-1 text-textH font-semibold hover:scale-105   transition-all duration-500 z-50">
          <Link to={"/login"}>Get started</Link>
        </button>
        <button className="md:w-32 h-11 w-full bg-HoverDiv rounded-3xl px-4 py-1 text-textH font-semibold   transition-all duration-500 border-[1px] border-gray-700  hover:scale-105  z-50 ">
          <Link to={"/article"}>Learn more</Link>
        </button>
      </div>
      <div className=" lg:w-[70%] md:w-4/5   hidden  h-auto mt-16 border-t-[1px] border-t-gray-700  border-b-[1px] border-b-gray-700 md:flex justify-between items-center  py-8">
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">
            Empower Healthy Choices
          </h2>
          <p className="text-textP">Make Healthier food choices</p>
        </div>
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">
            Nutritional Diversity
          </h2>
          <p className="text-textP ">Know about Indian Cuisines</p>
        </div>
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">
            Facilitate Access{" "}
          </h2>
          <p className="text-textP ">Finding most suitable nutrionists and free pantries</p>
        </div>
      </div>
      {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:w-full  w-4/5">
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img5} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img1} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img4} alt="" className="w-auto h-9 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img2} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img6} alt="" className="w-auto h-8 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img3} alt="" className="w-auto h-12 mx-auto" />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
