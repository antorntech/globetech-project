import React, { useEffect, useState } from "react";
import line1 from "../../images/Line 2.png";
import line2 from "../../images/Line 3.png";
import line3 from "../../images/Line 4.png";
import plane from "../../images/fa_space-shuttle.png";
import "./Services.css";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 py-3">
        <div className="col">
          <div className="d-flex align-items-center moves">
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
        </div>
      </div>
      <header className="text-center text-white mt-3">
        <h1>Services</h1>
        <p className="text-white">We provides services to our clients</p>
      </header>
      <div class="row row-cols-1 row-cols-md-3 g-4 py-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
