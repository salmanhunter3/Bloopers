import React, { useState } from "react";
import "./App.scss";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./view/_common/Header/header";
import Footer from "./view/_common/Footer/footer";
import Home from "./view/Home/home";
import Explore from "./view/Explore/explore";
import Upload from "./view/Upload/upload";
import Creator from "./view/Creator/creator";
import Premium from "./view/Premium/premium";
import Login from "./view/Auth/login/login";
import Signup from "./view/Auth/signup/signup";
import Challenges from "./view/Challenges/challenges";
import Video from "./view/Video/video";


function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <div
      className={
        darkMode
          ?
          "app dark"
          :
          "app light"
      }
    >

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route
          path="/"
          element={<Home darkMode={darkMode} />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/explore"
          element={<Explore darkMode={darkMode} />}
        />

        <Route
          path="/creator"
          element={<Creator />}
        />

        <Route
          path="/premium"
          element={<Premium />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/challenges"
          element={<Challenges />}
        />

        <Route
          path="/video/:id"
          element={<Video />}
        />

      </Routes>

      <Footer darkMode={darkMode}/>

    </div>
  );
}


export default App;