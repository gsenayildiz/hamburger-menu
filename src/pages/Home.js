import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";


function Home() {
  return (
  <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
    <div className="headerContainer">
     <h1>Burger06</h1>
     <p>Delicious Hamburgers <br/> witdh 06 Spicy Mixed </p>
     <Link to="/menu">
     <button>Order Now </button>
     </Link>
    </div>
  </div>);
}

export default Home;
