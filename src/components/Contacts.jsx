import { avtaarsImg } from '../Data/Data';

const Contacts = () => {
  return (
    <div
      className="bg-bg m-auto py-28 flex-col justify-center items-center mx-5"
      id="contact"
    >
      <div className="flex rounded-full justify-center mb-12">
        <img
          src={avtaarsImg.img1}
          alt=""
          className="rounded-full w-12 h-12 scale-95 "
        />
        <img
          src={avtaarsImg.img2}
          alt=""
          className="rounded-full w-12 h-12 scale-125 z-10"
        />
        <img
          src={avtaarsImg.img5}
          alt=""
          className="rounded-full w-12 h-12 scale-150 z-20"
        />
        <img
          src={avtaarsImg.img4}
          alt=""
          className="rounded-full w-12 h-12 scale-125 z-10"
        />
        <img
          src={avtaarsImg.img3}
          alt=""
          className="rounded-full w-12 h-12 scale-95"
        />
      </div>
      <div className=" text-textH text-5xl m-auto text-center font-bold ">
        Get Started Now
      </div>
      <div className="text-center text-gray-400 py-4 text-lg  w-full">
        Be part of millions people around the world using tailus in modern User
        Interfaces.
      </div>
      <div className="w-full m-auto  flex justify-center items-center md:flex-row box-border gap-6  flex-col   ">
        <button className=" md:w-32 h-11 w-full bg-btn rounded-3xl px-4 py-1 text-textH font-semibold hover:scale-105   transition-all duration-500">
          Get started
        </button>
        <button className="md:w-32 h-11 w-full bg-HoverDiv rounded-3xl px-4 py-1 text-textH font-semibold   transition-all duration-500 border-[1px] border-gray-700  hover:scale-105   ">
          More about
        </button>
      </div>
    </div>
  );
};

export default Contacts;
