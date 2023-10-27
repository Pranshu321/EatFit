import { featureData, technologyIntro } from '../Data/Data';
import { BsStars } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa6';
const Features = () => {
  return (
    <section className="w-[80%] m-auto my-20" id="feature">
      <div className="intro my-16">
        <BsStars className="text-2xl text-accent my-9" />
        <h1 className="text-textH font-extrabold text-4xl  my-9 w-full md:w-[40rem]">
          {technologyIntro.title}
        </h1>
        <p className="text-textP font-semibold text-base my-5 w-full md:w-[43rem]">
          {technologyIntro.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl border-solid border-[1px] border-gray-700 overflow-hidden">
        {featureData.map((value, key) => {
          return (
            <div
              key={key}
              className={
                value.bg
                  ? 'group py-10 px-10 bg-white group-hover:shadow-2xl group-hover:shadow-gray-600/10 border-solid border-[1px] border-gray-700 hover:bg-gray-100'
                  : 'group py-10 px-10 bg-transparent group-hover:shadow-2xl group-hover:shadow-gray-600/10 border-solid border-[1px] border-gray-700 hover:bg-gray-100'
              }
            >
              <div className="img h-12 w-12 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={value.img}
                  alt={value.alt}
                />
              </div>
              <div>
                <h1 className="text-textH text-2xl font-bold group-hover:text-accent my-4">
                  {value.title}
                </h1>
                <p className="text-textP text-base font-semibold my-4">
                  {value.discription}
                </p>
              </div>
              <a
                href=""
                className="text-textP text-base mt-12 mb-3 flex align-middle gap-28  group-hover:text-accent"
              >
                <div className="">{value.btn}</div>
                <div className="icon mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700">
                  <FaArrowRight />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
