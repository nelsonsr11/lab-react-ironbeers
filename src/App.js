import "./App.css";
import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beers from "./components/Beers";
import HomePage from "./components/HomePage";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/beer-details/:_id" element={<BeerDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
