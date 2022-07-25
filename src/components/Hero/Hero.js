import React from "react";
import "./Hero.css";
import line1 from "../../images/Line 2.png";
import line2 from "../../images/Line 3.png";
import line3 from "../../images/Line 4.png";
import plane from "../../images/fa_space-shuttle.png";
import space from "../../images/gelaxy.png";

const Hero = () => {
  return (
    <div className="container pt-5">
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center ">
        <div className="col">
          <div className="hero-content">
            <div className="d-flex align-items-center move">
              <div className="hero-line">
                <div id="line1">
                  <img src={line1} alt="" />
                </div>
                <div id="line2">
                  <img src={line2} alt="" />
                </div>
                <div id="line3">
                  <img src={line3} alt="" />
                </div>
              </div>
              <div>
                <img src={plane} alt="" />
              </div>
            </div>
            <div className="mt-4">
              <h1 style={{ color: "#28ACE2", fontSize: "72px" }}>
                Welcome to <span>Globetech</span>
              </h1>
              <p>
                We are committed to deliver{" "}
                <span style={{ color: "#caf130" }}>best IT services</span>. Our
                Consultants have experience in working with clients. We have
                extensive experience in the software application space and also
                offer a broad range and depth of technology.
              </p>
              <div>
                <button className="hero-btn me-lg-4" id="supportUsBtn">
                  Support Us
                </button>
                <button className="hero-btn" id="ourMissionBtn">
                  Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hero-banner d-flex justify-content-end">
            <img className="rotate" src={space} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
