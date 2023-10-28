import { useState } from "react";
import { NavCompany, NavigationData } from "./NavigationData";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = NavigationData[0].NavItems;
  // console.log(NavigationData[0].NavItems.Link);

  return (
    <div className=" Nagation md:w-[80%] w-full h-20 m-auto py-6 md:px-0 px-8 flex justify-between align-middle z-50 md:border-b-0 border-b border-b-white/5">
      <RouterLink to="/">
        <div className="text-textH text-2xl font-extrabold flex place-items-center gap-3">
          {/* <div className="flex gap-1">
            <div className="h-4 w-4 rounded-[100%] bg-green-800"></div>
            <div className="h-6 w-2 bg-btn"></div>
          </div>
          {NavCompany.title} */}
          <img src={logo} width={150} alt="logo" className="-mt-12" />
        </div>
      </RouterLink>

      <button
        className="flex md:hidden gap-2 flex-col text-lg items-center justify-center text-textH "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className="w-8 h-[0.10rem] bg-gray-400 transition-all duration-300"
          style={
            isOpen
              ? {
                  transform: "rotate(-45deg)",
                  height: "0.15rem",
                  borderRadius: "2rem",
                }
              : {}
          }
        ></div>
        <div
          className="w-8 h-1 bg-gray-400 relative bottom-[0.71rem] transition-all duration-300 "
          style={
            isOpen
              ? {
                  transform: "rotate(45deg)",
                  height: "0.15rem",
                  borderRadius: "2rem",
                }
              : { bottom: "0" }
          }
        ></div>
      </button>

      {isOpen && (
        <div className="absolute h-screen w-screen right-0 top-16 backdrop-blur-2xl bg-gray-900/70  transition-all delay-700 ">
          <div className="flex justify-start align-middle flex-col bg-[#293041] w-[90%] rounded-3xl m-auto my-7 gap-6 p-7 border-[1px] border-gray-700">
            {NavItems.map((value, key) => {
              console.log(value);
              return (
                <div key={key} className="m-0 h-auto ">
                  <Link
                    to={value.Link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                    className="text-black hover:text-[#6ACC00] text-lg w-36 transition-all duration-100 cursor-pointer"
                  >
                    {value.PageName}
                  </Link>
                </div>
              );
            })}
            <button className="px-4 py-1 w-full  text-textH text-base rounded-3xl  bg-btn hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
      <div className="hidden md:flex align-middle justify-around gap-7">
        {NavItems.map((items, key) => {
          return (
            <div key={key} className="m-auto h-auto">
              <RouterLink
                to={items.Link}
                className="text-black hover:text-[#6ACC00] text-lg w-36 transition-all duration-100 cursor-pointer"
              >
                {items.PageName}
              </RouterLink>
            </div>
          );
        })}
        <RouterLink to="/login" className="px-4 py-1  text-textH text-base rounded-3xl  bg-btn hover:scale-105 ">
          Login
        </RouterLink>
      </div>
    </div>
  );
};

export default NavigationBar;
