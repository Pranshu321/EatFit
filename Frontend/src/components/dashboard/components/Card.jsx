// import { CardsProps } from '@/types/interfaces';
import { BsArrowUpRight } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { auth } from "../../../firebase/firebase";

const Cards = ({
  id,
  available,
  image,
  consultation,
  free,
  languages,
  name,
  reviews,
  email,
  latestCaseType,
  about,
}) => {
  function sendMail() {
    emailjs
      .send(
        "service_6kpfmja",
        "template_nmyq33p",
        {
          Nname: name,
          Pname: auth.currentUser?.displayName,
          Pemail: auth.currentUser?.email,
          email: email,
        },
        "M59Q72Ln2jOVV1krL"
      )
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Appointment Mail Sent !!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Internal Server Error");
      });
  }
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
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">{name} Profile</h3>
          <p className="py-2 text-sm">
            <span className="text-green-500 text-base font-semibold">
              Email :{" "}
            </span>{" "}
            {email}
          </p>
          <p className="py-2 text-sm">
            <span className="text-green-500 text-base font-semibold">
              About :{" "}
            </span>{" "}
            {about}
          </p>
          <p className="py-2 text-sm">
            <span className="text-green-500 text-base font-semibold">
              LatestCaseType :{" "}
            </span>{" "}
            {latestCaseType}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex w-full bg-white flex-col rounded-md border md:flex-row">
        <div className="h-full w-full flex items-center ml-5 md:h-[200px] md:w-[300px]">
          <img
            src={
              image ||
              "https://github.com/tekdi/searchwidget-angular/assets/86917304/26e9bc94-b079-4f9d-ad11-78acddc84103"
            }
            alt="Laptop"
            className="h-[90%] w-[90%] rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="mt-3 flex flex-col gap-y-4">
            <div>
              <h1 className="inline-flex text-black items-center text-lg font-semibold">
                {name} <BsArrowUpRight className="ml-2 h-4 w-4" />
              </h1>
              <p className="font-semibold text-sm text-gray-600">
                Education Qualifications
                <span
                  className={`ml-3 text-black ${
                    reviews < 4 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {reviews} ✰
                </span>
              </p>
            </div>
            <div className="">
              <div className="text-black font-bold">Languages Known</div>
              <div className="text-black font-semibold">
                {languages.map((item, idx) => (
                  <span key={idx + 1}>{item} </span>
                ))}
              </div>
            </div>
            <div className="">
              <div className="text-black font-bold">Next Available At</div>
              <div className="text-black font-semibold">{available}</div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            {free ? (
              <div className="text-green-500 text-3xl font-bold">Free</div>
            ) : (
              <div>
                <div className="text-black font-semibold">Consultation Fee</div>
                <div className="text-black text-3xl font-bold">
                  {" "}
                  {consultation}/-
                </div>
              </div>
            )}
            <div className="flex flex-col gap-y-3 mt-6">
              <div>
                <button
                  type="button"
                  className="rounded-full bg-gray-300 px-3 py-2 lg:px-[3.8rem] text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => {
                    if (document) {
                      document.getElementById(id).showModal();
                    }
                  }}
                >
                  View Profile
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    sendMail();
                  }}
                  className="rounded-full bg-black px-3 py-2 lg:px-10 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
