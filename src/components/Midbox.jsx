import pie from '../assets/images/pie.svg';
import { BiSolidMessageAltDetail } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { AiFillPieChart } from 'react-icons/ai';
const Midbox = () => {
  return (
    <div className="w-4/5 m-auto my-16" id="solutions">
      <button className="text-PieI text-xl ml-5">
        <AiFillPieChart></AiFillPieChart>
      </button>
      <div className="flex flex-wrap-reverse justify-center items-center w-full">
        <div className="text lg:basis-1/2 flex-shrink   ">
          <p className="text-textH text-4xl p-5 font-bold">
            Nuxt development is carried out by passionate developers
          </p>
          <p className="text-textP p-5">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
          <p className="text-textP px-5">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
          <div className="flex mt-5 border-b-[1px] border-gray-800 pb-3">
            <button className="text-chatI mx-5 p-3 text-xl bg-chatBg rounded-full ">
              <BiSolidMessageAltDetail></BiSolidMessageAltDetail>
            </button>
            <div className=" inline-flex flex-col items-start ">
              <button className="text-chatT">Chat Anytime</button>
              <p className="text-textP">Asperiores nemo possimus nesciunt.</p>
            </div>
          </div>
          <div className="flex mt-5">
            <button className="text-locI mx-5 p-3 text-xl bg-locBg rounded-full ">
              <MdLocationOn></MdLocationOn>
            </button>
            <div className=" inline-flex flex-col items-start ">
              <button className="text-locT ">Real Time Loaction</button>
              <p className="text-textP">Asperiores nemo possimus nesciunt.</p>
            </div>
          </div>
        </div>
        <div className="img flex-shrink basis-1/2  ">
          <img
            src={pie}
            alt=""
            className="  md:m-auto md:w-[34rem] md:h-[34rem]   sm:w-[34rem] sm:h-[34rem]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Midbox;
