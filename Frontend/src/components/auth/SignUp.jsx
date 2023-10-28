import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import Layout from "../Layout";

function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [type, settype] = useState("");

  const createUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        const docRef = await setDoc(doc(db, "Users", email), {
          name,
          email,
          type,
        });
        toast.success("Successfully created!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        toast.error("User Already Exist");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen overflow-hidden bg-back">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
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
        {/*  Page content */}
        <main className="flex-grow">
          <section className="bg-back">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="text-4xl font-semibold text-text">
                    Welcome. We exist to make getting nutrients easier.
                  </h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-text text-sm font-medium mb-1"
                          htmlFor="name"
                        >
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="name"
                          onChange={(e) => setname(e.target.value)}
                          type="text"
                          className="py-3 px-2 border-2 rounded-md border-btn w-full text-gray-800"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-text text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="email"
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          className="py-3 px-2 border-2 rounded-md border-btn w-full text-gray-800"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-text text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="password"
                          onChange={(e) => setpassword(e.target.value)}
                          type="password"
                          className="py-3 px-2 border-2 rounded-md border-btn w-full text-gray-800"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button
                          className="py-2 rounded-md text-white font-semibold bg-btn w-full"
                          onClick={createUser}
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-3">
                      By creating an account, you agree to the{" "}
                      <a className="underline" href="#0">
                        terms & conditions
                      </a>
                      , and our{" "}
                      <a className="underline" href="#0">
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                  <div className="flex items-center my-6">
                    <div
                      className="border-t border-gray-300 flex-grow mr-3"
                      aria-hidden="true"
                    ></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div
                      className="border-t border-gray-300 flex-grow ml-3"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="text-gray-600 text-center mt-6">
                    Already using FeedIndia?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                    >
                      <span className="text-blue-500 hover:underline cursor-pointer">
                        Sign in
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default SignUp;
