import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SingleCocktail from "./components/SingleCocktail";
import React from "react";
import "./App.css";
import Error from "./components/Error";

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cocktail/:id"} element={<SingleCocktail />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
