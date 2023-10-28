import React from "react";
import {FaBowlFood} from "react-icons/fa6"

const FoodCard = ({ name, course, flavor, ing, image  , diet , state , region}) => {
  return (
    <div>
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img
          class="w-full h-56 object-cover object-center"
          src={
            image ||
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          }
          alt="avatar"
        />
        <div class="flex items-center px-6 py-3 bg-gray-900">
          <FaBowlFood class="text-white" size={20} />
          <h1 class="mx-3 text-white font-semibold text-lg">
            {course.toUpperCase()} | {flavor.toUpperCase()}
          </h1>
        </div>
        <div class="py-4 px-6">
          <h1 class="text-2xl font-semibold text-gray-800">{name}</h1>
          <p class="py-2 text-lg text-gray-700">
            <span className="text-lg font-semibold tracking-wide">
              Ingredients
            </span>{" "}
            {ing}
          </p>
          <div class="flex items-center mt-1 text-gray-700">
            <span className="text-lg font-semibold tracking-wide">Diet : </span>
            <h1 class="px-2 text-base">{diet}</h1>
          </div>
          <div class="flex items-center mt-3 text-gray-700">
            <span className="text-lg font-semibold tracking-wide">
              State :{" "}
            </span>
            <h1 class="px-2 text-base">{state}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <span className="text-lg font-semibold tracking-wide">Region : </span>
            <h1 class="px-2 text-base">{region}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
