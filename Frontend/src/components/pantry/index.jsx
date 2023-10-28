import React, { useEffect } from "react";
import Layout from "../Layout";
import toast, { Toaster } from "react-hot-toast";
import PantryCard from "./components/PantryCard";

const Pantry = () => {
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cardData, setCardData] = React.useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyHhdTcTC1vUM7EdrAfXGAPKwmrHSjTGYtKlT2fLpC3IbEqr_4LDo86MyIyEdLe5nsAzw/exec"
    );
    const Data = await response.json();
    setData(Data.data);
  };

  const GetCardData = () => {
    if (state === "" && city === "") {
      toast.error("Please Enter State or City");
      return;
    } else if (state !== "" && city !== "") {
      const temp = data.filter((item) => {
        return (
          item.state.toLowerCase() === state.toLowerCase() &&
          item.city.toLowerCase() === city.toLowerCase()
        );
      });
      setCardData(temp);
      return;
    } else if (state === "" && city !== "") {
      const temp = data.filter((item) => {
        return item.city.toLowerCase() === city.toLowerCase();
      });
      setCardData(temp);
      return;
    } else if (city === "" && state !== "") {
      const temp = data.filter((item) => {
        return item.state.toLowerCase() === state.toLowerCase();
      });
      setCardData(temp);
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="">
        <div className="hero h-[50vh] bg-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">No More Hunger</h1>
              <p className="py-6">
                With <strong className="text-lg">PantryLocator</strong> , we
                believe that no one should go hungry.
              </p>
              {/* <button className="btn bg-btn"></button> */}
            </div>
          </div>
        </div>
        <div className="flex mx-10 justify-center gap-x-5">
          <div class="w-[30%]">
            <div class="relative flex items-center w-full h-12 rounded-lg border-btn border-2 focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={(e) => setState(e.target.value)}
                placeholder="Search via State.."
              />
            </div>
          </div>
          <div class="w-[30%]">
            <div class="relative flex items-center w-full h-12 rounded-lg border-btn border-2 focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search via City"
              />
            </div>
          </div>
          <button onClick={GetCardData} className="btn btn-success">
            Search
          </button>
        </div>
        <div className="flex mt-10 gap-y-10 flex-wrap w-full justify-evenly">
            {
                cardData.map((item,idx)=>{
                    return (
                      <PantryCard
                        key={idx}
                        Name={item.Name}
                        State={item.state}
                        City={item.city}
                        type={item.NGOType}
                        est={item.RegDate}
                        mem1={item.Member_1}
                        mem2={item.Member_2}
                        address={item.Address}
                        mobile={item.Mobile}
                        email={item.Email}
                      />
                    );
                })
            }
        </div>
      </div>
    </Layout>
  );
};

export default Pantry;
