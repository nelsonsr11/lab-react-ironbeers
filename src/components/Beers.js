import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    console.log(response.data);
    setBeers(response.data);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {beers.map((brr) => {
        return (
          <p>
            <Link to={`/beer-details/${brr._id}`}>{brr.name}</Link>
            {brr.tagline}
            {brr.contributed_by}
            <img height="100" src={brr.image_url}></img>
          </p>
        );
      })}
    </div>
  );
};

export default Beers;
