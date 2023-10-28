import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import Layout from "../Layout";

const SingleBlog = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [data, setData] = React.useState({});
  const getData = async () => {
    const docRef = doc(db, "Blogs", `${blogId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(()=>{
    getData();
  },[blogId]);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-between p-12 bg-white text-black">
        <div className="text-3xl font-bold">{data.title}</div>
        <div className="flex w-1/2 h-1/3 justify-center pt-5">
          <img
            src={
              data.image || 
              "https://user-images.githubusercontent.com/86917304/265525358-1876345d-594c-4300-94d2-9dda07d063d8.png"
            }
            alt="image"
            className="w-full"
          />
        </div>
        <div className="leading-7 py-10 w-[90%]">
          <p dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="flex-grow border-t-2 border-gray-700 w-[94%] relative top-[3.8rem] -z-20 text-black">
          .
        </div>
        <div className="flex justify-center flex-col items-center">
          <img
            className="inline-block h-20 w-20 rounded-full"
            src={data.authorImg}
            alt="Dan_Abromov"
          />
          <div className="text-lg font-semibold">{data.author}</div>
          <div>Blogger</div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
