import React, { useEffect, useState as us } from "react";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import useState from "react-usestateref";
import { v4 } from "uuid";

const Articles = () => {
  const [articles, setArticles, artilcesref] = useState([]);
  const [ids, setids, idsref] = useState([]);

  const [dataObj, setdataObj] = us({
    title: "",
    content: "",
    image: null,
  });

  const DeleteData = async (id) => {
    try {
      //   console.log(id);
      db.collection("Users")
        .doc(auth.currentUser?.email)
        .collection("articles")
        .doc(id)
        .delete();
      //   toast.success("Article Deleted !!");
    } catch (error) {
      console.log(error);
    }
  };

  const SendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "Blogs"), {
        ...dataObj,
        author: auth.currentUser?.displayName,
        authorImg: auth.currentUser?.photoURL,
      });
      console.log("Document written with ID: ", docRef.id);
      SendSingleArticle();
      toast.success("Article Published !!");
    } catch (error) {
      toast.error("Currently We are down");
    }
  };

  const SendSingleArticle = () => {
    db.collection("Users")
      .doc(auth.currentUser?.email)
      .collection("articles")
      .add(dataObj)
      .then((docRef) => {
        console.log("Good", docRef);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsersArticles = () => {
    db.collection("Users")
      .doc(auth.currentUser?.email)
      .collection("articles")
      .onSnapshot((snapshot) => {
        console.log(
          "Data",
          snapshot.docs.map((doc) => {
            doc.data();
          })
        );
        setArticles(snapshot.docs.map((doc) => doc.data()));
        setids(snapshot.docs.map((doc) => doc.id));
      });
  };

  useEffect(() => {
    getUsersArticles();
  }, []);

  const SetImageURL = (e) => {
    const storageRef = ref(
      storage,
      `articles/${e.target.files[0].name + v4()}`
    );

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(storageRef).then((url) =>
        setdataObj({ ...dataObj, image: url })
      );
      console.log("Exhibiton uploaded");
    });
  };

  return (
    <div>
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
      <main>
        <div className="flex">
          <aside className=" flex flex-col w-1/4 h-screen px-5 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <a href="/">
              <img className="w-auto h-20 " src="" alt="" />
            </a>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="flex-1 -mx-3 space-y-5 mt-16 ">
                <div id="list">
                  <Link
                    to={"/dashboard"}
                    className="listItem flex  px-7 py-5 text-white bg-gray-700 my-5 mx-5 transition-colors duration-300 transform rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <span className="mx-2 text-lg font-medium">Dashboard</span>
                  </Link>
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
                    className="listItem flex  px-7 py-5 text-black bg-gray-100 my-5 mx-5 transition-colors duration-300 transform rounded-full hover:bg-gray-100 "
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
            <div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn float-right bg-btn"
              >
                Publish a Article
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Publish Your Article</h3>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">What is your Title?</span>
                      <span className="label-text-alt">Article Title</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setdataObj({ ...dataObj, title: e.target.value });
                      }}
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control mt-3">
                    <label className="label">
                      <span className="label-text">Your Article</span>
                      <span className="label-text-alt">Write in brief</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Your Tilte Description...."
                      onChange={(e) => {
                        setdataObj({ ...dataObj, content: e.target.value });
                      }}
                    ></textarea>
                  </div>
                  <div className="form-control mt-3 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Pick a photo</span>
                      <span className="label-text-alt">Article Face</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                      accept="image/*"
                      onChange={(e) => {
                        setdataObj({ ...dataObj, file: SetImageURL(e) });
                      }}
                    />
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={SendData}
                      className="btn hover:bg-btn bg-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </dialog>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {artilcesref.current.map((article, idx) => (
                  <div key={idx+1} className="card w-96 bg-base-100 shadow-xl m-16">
                    <div className="card-body">
                      <button
                        onClick={() => DeleteData(idsref.current[idx])}
                        className="btn btn-error text-white absolute right-3 w-1/4"
                      >
                        Delete
                      </button>
                      <h2 className="card-title">{article.title}</h2>
                      <p>{article.content}</p>
                    </div>
                    <figure>
                      <img
                        src={
                          article.image ||
                          "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        }
                        alt="Shoes"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
