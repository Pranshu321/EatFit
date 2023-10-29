import { useState } from "react";
import Cards from "./components/Card"
import Experts from "./Experts";

const Nutritionist = () => {
  const [Free, setFree] = useState("");
  
  return (
    <div className="overflow-y-scroll h-[93vh] p-4 flex flex-col gap-y-4 remove-scroll">
      <span
        className="inline-flex min-w-24 max-w-max cursor-pointer items-center rounded-md bg-green-50 px-2 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
        onClick={() => {
          if (Free === "Free") {
            setFree("");
          } else {
            setFree("Free");
          }
        }}
      >
        Free Consultation
      </span>
      <h3 className="text-2xl font-bold text-white">
        Top Criminal Defense Lawyers Available
      </h3>
      {Free === "Free"
        ? Experts.map((item, idx) => {
            if (item.free === true) {
              return (
                <Cards
                  id={idx.toString()}
                  key={idx + 1}
                  available={item.available}
                  consultation={item.consultation}
                  email={item.email}
                  image={item.image}
                  free={item.free}
                  languages={item.languages}
                  name={item.name}
                  reviews={item.reviews}
                  about={item.about}
                  latestCaseType={item.latestCaseType}
                />
              );
            }
          })
        : Experts.map((item, idx) => (
            <Cards
              id={idx.toString()}
              key={idx + 1}
              available={item.available}
              email={item.email}
              consultation={item.consultation}
              image={item.image}
              free={item.free}
              languages={item.languages}
              name={item.name}
              reviews={item.reviews}
              about={item.about}
              latestCaseType={item.latestCaseType}
            />
          ))}
    </div>
  );
};

export default Nutritionist;
