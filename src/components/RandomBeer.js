import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import axios from "axios";

const RandomBeer = () => {
  const [random, setRandom] = React.useState([]);
  // const params = useParams();

  React.useEffect(() => {
    getBeerDet();
  }, []);

  const getBeerDet = async () => {
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setRandom(response.data);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {/* <p>{params._id}</p> */}
      <img height="100" src={random.image_url}></img>
      <p>{random.name}</p>
      <p>{random.tagline}</p>
      <p>{random.first_brewed}</p>
      <p>{random.attenuation_level}</p>
      <p>{random.description}</p>
      <p>{random.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
