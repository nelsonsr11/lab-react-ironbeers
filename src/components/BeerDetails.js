import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const BeerDetails = () => {
  const [beersDet, setBeerDet] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    getBeerDet();
  }, []);

  const getBeerDet = async () => {
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${params._id}`
    );
    setBeerDet(response.data);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <p>{params._id}</p>
      <img height="100" src={beersDet.image_url}></img>
      <p>{beersDet.name}</p>
      <p>{beersDet.tagline}</p>
      <p>{beersDet.first_brewed}</p>
      <p>{beersDet.attenuation_level}</p>
      <p>{beersDet.description}</p>
      <p>{beersDet.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
