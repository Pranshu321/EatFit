import a1 from "../assets/images/a1.jpg";
import a2 from "../assets/images/a2.jpg";
import a3 from "../assets/images/a3.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestArticleSection = () => {
  const [idi, setidi] = useState([]);
  const [data, setdata] = useState([]);
  const getData = async () => {
    let temp = [];
    let ids = [];
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ids.push(doc.id);
      temp.push(doc.data());
    });
    setidi(ids);
    setdata(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-bg  py-20 flex justify-center items-center flex-col">
      <div className=" text-textH md:text-5xl text-4xl m-auto text-center font-bold ">
        Latest Article
      </div>
      <div className="text-center text-gray-500 py-4 lg:w-3/5  w-4/5 flex justify-center items-center">
        Stay Informed and Inspired with Our Latest Articles. Explore a Wealth of
        Nutrition Knowledge, Wellness Tips, and Healthy Living Stories, All in
        One Place.
      </div>
      <div className="boxes  my-7 w-full grid lg:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-8">
        {data.map((item, idx) => {
          if (idx < 3) {
            return (
              <div
                key={idx + 1}
                className="lg:w-96 md:w-80 w-72 bg-white rounded-3xl border-gray-600 border-[1px] my-4"
              >
                <div className="overflow-hidden lg:w-80 md:w-72 w-64 m-auto rounded-xl lg:h-60 md:h-60 h-56 my-2">
                  <img
                    src={item.image || a1}
                    alt=""
                    className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
                  />
                </div>
                <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
                  {item.title}
                </div>
                <div className="pl-7 pr-6 text-gray-500 py-5 text-md font-semibold">
                  {item.content.slice(0, 150)}
                </div>
                <Link
                  to={`/article/${idi[idx]}`}
                  className="pl-7 -mt-4 text-blue-500 font-semibold mb-7"
                >
                  Read More
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default LatestArticleSection;
