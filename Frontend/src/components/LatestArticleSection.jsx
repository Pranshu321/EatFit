import a1 from '../assets/images/a1.jpg';
import a2 from '../assets/images/a2.jpg';
import a3 from '../assets/images/a3.jpg';

const LatestArticleSection = () => {
  return (
    <div className="bg-bg  py-20 flex justify-center items-center flex-col">
      <div className=" text-textH md:text-5xl text-4xl m-auto text-center font-bold ">
        Latest Article
      </div>
      <div className="text-center text-gray-500 py-4 lg:w-3/5  w-4/5 flex justify-center items-center">
        Stay Informed and Inspired with Our Latest Articles. Explore a Wealth of
        Nutrition Knowledge, Wellness Tips, and Healthy Living Stories, All in
        One Place.
      </div>
      <div className="boxes  my-7 w-full grid lg:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-8">
        <div className="lg:w-96 md:w-80 w-72 bg-white rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden lg:w-80 md:w-72 w-64 m-auto rounded-xl lg:h-64  md:h-60 h-56 my-7">
            <img
              src={a1}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-500 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7  text-blue-500 font-semibold mb-7">
            Read More
          </button>
        </div>
        <div className="lg:w-96 md:w-80 w-72 bg-white rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden lg:w-80 md:w-72 w-64 m-auto rounded-xl lg:h-64  md:h-60 h-56 my-7">
            <img
              src={a3}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-500 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7 font-semibold text-blue-500 mb-7">
            Read More
          </button>
        </div>
        <div className="lg:w-96 md:w-80 w-72 bg-white rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden lg:w-80 md:w-72 w-64 m-auto rounded-xl lg:h-64  md:h-60 h-56 my-7">
            <img
              src={a2}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-500 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7  text-blue-500 font-semibold mb-7">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestArticleSection;
