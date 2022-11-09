import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
      const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  console.log(features);
  return (
    <>
      <div className="featured-title">
        <hr width="400px" size="2" color="blueviolet" />
        <h2>Featured Products</h2>
        <hr width="400px" size="2" color="blueviolet" />
      </div>
      <section className="featured">
        {features.map((feature) => (
          <div className="featured-card" key={feature.id}>
            <img src={feature.image} alt="" />
            <p
              className="name"
              style={{
                textOverflow: feature.title.length > 25 ? "ellipsis" : "auto",
                overflow: feature.title.length > 25 ? "hidden" : "auto",
                whiteSpace: feature.title.length > 25 ? "nowrap" : "wrap",
                width: "300px",
                textAlign:"center"
              }}
            >
              {feature.title}
            </p>
            <span className="price">${feature.price.toFixed(2)}</span>
             <button
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <Link to={`/men/id`}> view more</Link>
          </button>
          </div>
        ))}
      </section>

    </>
  )
}

export default Featured