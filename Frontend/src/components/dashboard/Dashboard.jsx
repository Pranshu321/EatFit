import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { featureData, technologyIntro } from "../../Data/Data";
import { FaArrowRight } from "react-icons/fa6";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const router = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // User is signed out
        router("/");
        // ...
      }
    });
  });
  return (
    <div>
      <main>
        <div className="flex">
          <aside className="flex flex-col w-1/4 h-screen px-5 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Link to="/dashboard">
              <img className="w-auto h-20 " src="" alt="" />
            </Link>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="flex-1 -mx-3 space-y-5 mt-16 ">
                <div id="list">
                  <Link
                    to={"/dashboard"}
                    className="listItem flex  px-7 py-5 text-black bg-gray-100 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <span className="mx-2 text-lg font-medium">Dashboard</span>
                  </Link>

                  {/* <Link
                    to={"/calorie"}
                    className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <span className="mx-2 text-lg font-medium">
                      Calorie Snap
                    </span>
                  </Link> */}

                  <Link
                    to={"/attendance"}
                    className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <span className="mx-2 text-lg font-medium">
                      Nutritionist Checkup
                    </span>
                  </Link>

                  <Link
                    to={"/yourarticles"}
                    className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <span className="mx-2 text-lg font-medium">
                      Your Articles
                    </span>
                  </Link>
                </div>
              </nav>
              <div className="flex items-center justify-between mt-6 pr-5">
                <a href="#" className="flex items-center gap-x-2">
                  <img
                    className="object-cover rounded-full h-7 w-7 profile__pic mr-2"
                    src={
                      auth.currentUser?.photoURL != null
                        ? auth.currentUser?.photoURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_F8Fkc4WqCZ018z4t2RSPmA9iTAdeEaopA&usqp=CAU"
                    }
                    alt="avatar"
                  />
                  <span className="text-sm font-medium text-white dark:text-gray-200">
                    {auth.currentUser?.displayName}
                  </span>
                </a>

                <a
                  href="#"
                  onClick={() => auth.signOut()}
                  className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-btn dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
          <div className=" w-3/4 p-16 flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl border-solid border-[1px] border-gray-700 overflow-hidden">
              {featureData.map((value, key) => {
                return (
                  <Link to={value.link} className="">
                    <div
                      key={key}
                      className={
                        value.bg
                          ? "group py-10 px-10 bg-white group-hover:shadow-2xl group-hover:shadow-gray-600/10 border-solid border-[1px] border-gray-700 hover:bg-gray-100"
                          : "group py-10 px-10 bg-transparent group-hover:shadow-2xl group-hover:shadow-gray-600/10 border-solid border-[1px] border-gray-700 hover:bg-gray-100"
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
                        {value.btn}
                        <div className="icon mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700">
                          <FaArrowRight />
                        </div>
                      </a>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
