import React from "react";
// import watch from './a\'
import watch from "./watch.jpeg";

const Filter = () => {
  return (
    <div className="filter">
      <span style={{ fontSize: "24px",fontWeight:'600',paddingBottom:'10px' }}>Special Sale</span>
      <hr width="350px" color="gainsboro" />
      <img src={watch} style={{ height: "15em" }} alt="" />
      <h3>Addy Alldre</h3>
      <span style={{ color: "blueviolet", fontSize: "18px" }}>$100.00</span>
      <p style={{ marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        cupiditate? Explicabo aperiam at rerum maxime assumenda sequi earum
        blanditiis atque!
      </p>
      <button>View More</button>
    </div>
  );
};

export default Filter;
