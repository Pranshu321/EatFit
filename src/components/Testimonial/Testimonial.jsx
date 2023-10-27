import { TestData as Data } from './TestimonialData';

const Testimonial = () => {
  return (
    <div
      className="w-4/5 h-auto box-border flex justify-center items-center flex-col"
      id="review"
    >
      <h2 className="md:text-5xl text-3xl font-bold text-textH mt-16 ">
        We have only fans.
      </h2>
      <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 mt-16">
        {Data.map((itmes, index) => {
          console.log(itmes, index);
          console.log(itmes.img);
          return (
            <div
              className=" aspect-auto  box-border flex justify-center items-center flex-col p-8 bg-gray-800 border-gray-600   rounded-2xl"
              key={index}
            >
              <div className="w-full h-auto box-border flex justify-between items-center gap-x-3">
                <div className="w-1/5 h-auto box-border">
                  <img
                    src={itmes.img}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className=" w-4/5 h-auto ">
                  <p className=" font-bold text-[#ACAEB6]">{itmes.Name}</p>
                  <p className="text-textP">{itmes.Position}</p>
                </div>
              </div>
              <div className="w-full h-auto text-[#ACAEB6] mt-6">
                <p>{itmes.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
