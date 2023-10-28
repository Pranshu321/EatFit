import {
  FaGithub,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full h-auto mt-36 flex justify-center items-center md:flex-col gap-8 flex-wrap">
      <div className="w-full h-auto flex justify-center items-center md:flex-row  flex-col basis-2/5">
        <ul className="flex justify-evenly items-center gap-16 text-gray-900 md:flex-row flex-col ">
          <li className="list-disc  hover:text-btn transition-colors duration-300">
            <a href="#">Home</a>
          </li>
          <li className="list-disc  hover:text-btn  transition-colors duration-300">
            <a href="#">About</a>
          </li>
          <li className="list-disc  hover:text-btn  transition-colors duration-300">
            <a href="#">Guide</a>
          </li>
          <li className="list-disc  hover:text-btn  transition-colors duration-300">
            <a href="#">Blocks</a>
          </li>
          <li className="list-disc  hover:text-btn  transition-colors duration-300">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex justify-evenly items-center md:flex-row flex-col basis-2/5">
        <ul className="flex justify-evenly items-center md:gap-8 text-gray-900 md:flex-row flex-col gap-16 ">
          <li>
            <a
              href="#"
              className="w-auto h-auto flex justify-center items-center gap-2  hover:text-btn"
            >
              <FaGithub></FaGithub> Github
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-auto h-auto flex justify-center items-center gap-2  hover:text-btn"
            >
              <FaXTwitter></FaXTwitter> Twitter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-auto h-auto flex justify-center items-center gap-2  hover:text-btn"
            >
              <FaYoutube></FaYoutube> Youtube
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-auto h-auto flex justify-center items-center gap-2  hover:text-btn"
            >
              <FaInstagram></FaInstagram> Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-auto h-auto flex justify-center items-center gap-2  hover:text-btn"
            >
              <FaLinkedin></FaLinkedin> Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className=" w-4/5 h-auto flex justify-evenly items-center border-t border-gray-700 md:flex-row flex-col basis-full ">
        <p className="my-4 text-gray-900 box-border">
          This Website is Crafted By{" "}
          <span className=" font-extrabold text-btn">
            FeedIndia | Hackit Dev
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
