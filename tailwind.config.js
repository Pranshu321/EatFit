/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        textH: "#000",
        textP: "#5B626E",
        accent: "#6ACC00",
        btn: "#6ACC00",
        Tdiv: "#293041",
        PieI: "#0EA5E9",
        chatT: "#A5B4FC",
        chatI: "#818CF8",
        chatBg: "#151B3C",
        locT: "#5EEAD4",
        locI: "#2DD4BF",
        locBg: "#0F2131",
      },
    },
  },
};
