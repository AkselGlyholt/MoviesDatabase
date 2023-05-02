import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi"
import { FaRegHandshake } from "react-icons/fa"

function Features() {
  return (
    <div className="features--container">
      <h1 className="features__title">
        Why choose <span className="blue">TMDB</span>
      </h1>
      <div className="features__points--container">
        <div className="feature__point">
          <div className="feature__icon--wrapper">
            <BsFillLightningFill className="feature--icon" />
          </div>
          <h1 className="feature__title">Easy and Fast</h1>
          <p className="feature__para">Find your favorite movies fast and easy</p>
        </div>
        <div className="feature__point">
          <div className="feature__icon--wrapper">
            <BiCameraMovie className="feature--icon" />
          </div>
          <h1 className="feature__title">10,000+ Movies</h1>
          <p className="feature__para">TMDB has movies in all your favorite categories</p>
        </div>
        <div className="feature__point">
          <div className="feature__icon--wrapper">
            <FaRegHandshake className="feature--icon" />
          </div>
          <h1 className="feature__title">Reliable</h1>
          <p className="feature__para">You're always able to find your movies 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
