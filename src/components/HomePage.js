import React from "react";
import { Routes, Link, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">NewBeer</Link>
      </nav>
    </div>
  );
};

export default HomePage;
