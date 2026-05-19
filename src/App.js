import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./view/_common/Header/header";

import Footer from "./view/_common/Footer/footer";

import Home from "./view/Home/home";

import Explore from "./view/Explore/explore";

function App() {

  return (

    <>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

      </Routes>

      <Footer />

    </>

  );
}

export default App;