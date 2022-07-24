import React from "react";

const Service = (props) => {
  const { id, img, title, description } = props.service;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center" style={{ color: "#2397CD" }}>
            {title}
          </h5>
          <p class="card-text" style={{ color: "#000633" }}>
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-center py-3">
          <button
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "25px",
              background: "#2397CD",
              color: "#fff",
              border: "none",
            }}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
