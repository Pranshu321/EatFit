import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import FoodCard from "./components/FoodCard";

const FoodEncyclopedia = () => {
  const [stateValue, setState] = useState("");
  const [foodValue, setfood] = useState("");
  const [stateShow, setStateShow] = useState(true);
  const [foodShow, setfoodShow] = useState(true);
  const [FoodOptions, setFoodOptions] = useState([]);
  const [foodData, setfoodData] = useState({});
  const course = ["main course", "dessert", "snack"];

  const getData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/foods/${stateValue}`);
    const data = await response.json();
    setFoodOptions(data);
  };

  const getFoodData = async () => {
    console.log(`http://127.0.0.1:8000/food-details/${stateValue}/${foodValue}`);
    if (stateValue !== "") {
      const response = await fetch(
        `http://127.0.0.1:8000/food-details/${stateValue}/${foodValue}`
      );
      const data = await response.json();
      console.log(data);
      setfoodData(data);
    }
  };

  useEffect(() => {
    getFoodData();
  }, [foodValue]);

  useEffect(() => {
    getData();
  }, [stateValue]);

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="lg:w-full mt-16 md:w-full  flex justify-center items-center lg:px-48 md:px-16 flex-col gap-6 px-6 text-center">
          <h1 className="lg:text-6xl md:text-6xl text-5xl text-textH text-center w-full h-auto font-bold">
            Empower your plate with
            <span> knowledge</span>
          </h1>
          <p className=" text-gray-600 w-full">
            Discover the Story behind every bite. Here Nourishment Meets
            Enlightenment.Uncover the ingredients, flavor, and origin of your
            favorite dishes Know what your food plate is made up of Empower
            yourself with not only taste but also knowledge.
          </p>
        </div>
        <div className="flex gap-x-10 justify-center mt-10">
          <div className="w-full md:w-1/5">
            <label className="text-btn font-bold text-lg tracking-widest">
              Type of Course
            </label>
            <input
              className="flex mt-1 h-10 w-full text-black font-semibold rounded-md border border-btn bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none"
              type="text"
              placeholder="Select Course"
              onClick={() => setStateShow(!stateShow)}
              defaultValue={stateValue.toUpperCase()}
            ></input>
            <div
              hidden={stateShow}
              className="absolute w-1/5 remove-scroll overflow-y-scroll h-1/5 p-2 mt-1 rounded-lg bg-gray-50"
            >
              {course.map((item, idx) => (
                <div
                  key={idx + 1}
                  onClick={() => {
                    setState(item);
                    setStateShow(true);
                  }}
                  className="text-black p-1 cursor-pointer rounded-md text-lg font-semibold hover:bg-btn"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {FoodOptions.length > 0 && (
            <div className="w-full md:w-1/5">
              <label className="text-btn font-bold text-lg tracking-widest">
                Select Your Food
              </label>
              <input
                className="flex mt-1 h-10 w-full text-black font-semibold rounded-md border border-btn bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none"
                type="text"
                placeholder="Select Food"
                onClick={() => setfoodShow(!foodShow)}
                defaultValue={foodValue.toUpperCase()}
              ></input>
              <div
                hidden={foodShow}
                className="absolute w-1/5 remove-scroll overflow-y-scroll h-1/5 p-2 mt-1 rounded-lg bg-gray-50"
              >
                {FoodOptions.map((item, idx) => (
                  <div
                    key={idx + 1}
                    onClick={() => {
                      setfood(item);
                      setfoodShow(true);
                    }}
                    className="text-black p-1 cursor-pointer rounded-md text-lg font-semibold hover:bg-btn"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-10 flex justify-center">
          {Object.keys(foodData).length > 0 && (
            <FoodCard
              name={foodData.name}
              ing={foodData.ingredients}
              image={foodData.image}
              state={foodData.state}
              region={foodData.region}
              course={foodData.course}
              flavor={foodData.flavor_profile}
              diet={foodData.diet}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FoodEncyclopedia;
