import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

function SignIn() {
  const provider = new GoogleAuthProvider();
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        history("/dashboard");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result);
        history("/dashboard");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };

  const EmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        toast.success("Successfully Login !");
        const user = userCredential.user;
        console.log(user.displayName);
        history.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid Credentials!");
      });
  };
  return (
    <Layout>
      <div className="flex flex-col min-h-screen overflow-hidden bg-white">
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
        {/*  Page content */}
        <main className="flex-grow bg-white">
          <section className=" bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-20 pb-12 md:pt-20 md:pb-10">
                {/* Page header */}
                <div className="max-w-3xl text-black mx-auto text-center pb-12 md:pb-20">
                  <h1 className="text-2xl font-semibold text-testred">
                    Welcome back. We exist to getting help easier.
                  </h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block  text-sm font-medium mb-1 text-text"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          className="py-3 px-2 border-2 border-testred rounded-md w-full text-gray-800"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <div className="flex justify-between">
                          <label
                            className="block text-text text-sm font-medium mb-1"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <Link
                            href="/auth/reset-password"
                            className="text-sm font-medium text-blue-600 hover:underline"
                          >
                            Having trouble signing in?
                          </Link>
                        </div>
                        <input
                          id="password"
                          onChange={(e) => setpassword(e.target.value)}
                          type="password"
                          className="py-3 px-2 rounded-md border-2 border-testred w-full text-gray-800"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <div className="flex justify-between">
                          <label className="flex items-center">
                            <input type="checkbox" className="p-2" />
                            <span className="text-gray-600 ml-2">
                              Keep me signed in
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button
                          className="text-black py-2 font-semibold bg-gray-400 hover:text-white rounded-md hover:bg-testred w-full"
                          onClick={EmailLogin}
                        >
                          Sign in
                        </button>
                      </div>
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
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button
                        onClick={GoogleLogin}
                        className="bg-black rounded-md px-0 py-2 text-white hover:bg-btn w-full relative flex items-center"
                      >
                        <div className="ml-2">
                          <AiFillGoogleCircle size={25} color="white" />
                        </div>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600 text-center mt-6">
                    Don’t you have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                    >
                      Sign up
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

export default SignIn;
