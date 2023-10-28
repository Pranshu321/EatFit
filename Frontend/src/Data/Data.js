import avtar1 from "../assets/images/avatars/avatar-1.webp";
import avtar2 from "../assets/images/avatars/avatar-2.webp";
import avtar3 from "../assets/images/avatars/avatar-3.webp";
import avtar4 from "../assets/images/avatars/avatar-4.webp";
import avtar from "../assets/images/avatars/avatar.webp";
import airbnb from "../assets/images/clients/airbnb.svg";
import ge from "../assets/images/clients/ge.svg";
import googleCloud from "../assets/images/clients/google-cloud.svg";
import google from "../assets/images/clients/google.svg";
import microsoft from "../assets/images/clients/microsoft.svg";
import netflix from "../assets/images/clients/netflix.svg";
import iconfirst from "../assets/images/icons/iconkechi.png";
import iconSecond from "../assets/images/icons/iconfluit.png";
import iconThird from "../assets/images/icons/iconget.png";
import iconForth from "../assets/images/icons/iconWatch.png";

export const avtaarsImg = {
  img1: avtar1,
  img2: avtar2,
  img3: avtar3,
  img4: avtar4,
  img5: avtar,
};

export const Clients = {
  img1: airbnb,
  img2: ge,
  img3: googleCloud,
  img4: google,
  img5: microsoft,
  img6: netflix,
};

export const technologyIntro = {
  title: `Unlock the Nutrition Revolution`,
  subtitle: `Unleash the Full Potential of Nutrition with Our App's Unique Features. From Instant Nutritional Insights to Meal Planning and Community Support, We're Redefining Your Path to Healthier Living.`,
};

export const featureData = [
  {
    img: iconfirst,
    alt: `First feature`,
    title: `Calorie Snap`,
    discription: ` Snap a photo for instant nutrition information.`,
    btn: `Try Feature`,
    link: "/calorie",
    bg: true,
  },
  {
    img: iconSecond,
    alt: `burger illustration`,
    title: `Nutri Tracker`,
    discription: `Plan meals and track their nutritional values.`,
    btn: `Try Feature`,
    link: "/nutri",
    bg: true,
  },
  {
    img: iconThird,
    alt: `burger illustration`,
    title: `Food Encyclopedia`,
    discription: `Access extensive food knowledge and information.`,
    btn: `Try Feature`,
    link: "/foodenc",
    bg: true,
  },
  {
    img: iconForth,
    alt: `burger illustration`,
    title: `Pantry Locator`,
    discription: `Locate NGOs providing free food resources across India.`,
    btn: `Try Feature`,
    link: "/pantry",
    bg: false,
  },
];
