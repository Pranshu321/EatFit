import "./App.css";
import HeroSection from "./components/HeroSection";
import Contacts from "./components/Contacts";
import LatestArticleSection from "./components/LatestArticleSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Testimonial from "./components/Testimonial/Testimonial";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Midbox from "./components/Midbox";
import { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import LoadingBar from "./components/LoadingAnimation/LoadingBar";

function Home() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter(Counter + 20);
      setIsLoading(false);
    }, 3000);
  }, [Counter]);
  return (
    <>
      {IsLoading ? (
        <div className="box-border w-full h-screen flex bg-bg justify-center items-center flex-col transition-all duration-1000">
          <img
            className=" w-16 h-16 animate-pulse duration-200"
            src={logo}
            alt=""
          />
          <LoadingBar />
        </div>
      ) : (
        <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col scroll-smooth ">
          <NavigationBar />
          <HeroSection />
          <Features />
          {/* <Midbox /> */}
          {/* <Testimonial /> */}
          <Contacts />
          <LatestArticleSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
