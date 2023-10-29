import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nutri from "./Nutri/App";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Blog from "./components/Blogs";
import SingleBlog from "./components/Blogs/SingleBlog";
import Pantry from "./components/pantry";
import FoodEncyclopedia from "./components/Food_Encyclopedia";
import Dashboard from "./components/dashboard/Dashboard";
import CalorieSnap from "./components/dashboard/CalorieSnap";
import Articles from "./components/dashboard/Articles";
import Nutritionist from "./components/dashboard/Nutritionist";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutri" element={<Nutri />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/article" element={<Blog />}></Route>
        <Route path="/pantry" element={<Pantry />}></Route>
        <Route path="/article/:blogId" element={<SingleBlog />} />
        <Route path="/foodenc" element={<FoodEncyclopedia />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calorie" element={<CalorieSnap />} />
        <Route path="/yourarticles" element={<Articles />} />
        <Route path="/attendance" element={<Nutritionist />} />
      </Routes>
    </div>
  );
};

export default App;
