import React, { useState } from "react";
import sprite from "../../images/sprite.svg";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = Object.entries(importAll(
  require.context("../../images/apes", false, /\.(png|jpe?g|svg)$/)
))



function Slider(props) {
  const [sectionIndex, setSectionIndex] = useState(0);

  function nextslide() {
    if (sectionIndex < 2) {
      setSectionIndex(sectionIndex + 1);
    } else {
      setSectionIndex(2);
    }
  }
  function backslide() {
    if (sectionIndex < 1) {
      setSectionIndex(0);
    } else {
      setSectionIndex(sectionIndex - 1);
    }
  }


  return (
    <>
      <div id="gallary" className="slider-container">
        <div className="carousel">
          <div
            style={{ transform: `translate(${sectionIndex * -33.33}%)` }}
            className="slider"
          >
            <div className=" slide-1 grid grid--5x2">
              {images.slice(0, 10).map((img) => (
                <img
                  key={img[0]}
                  className="slide__image"
                  src={img[1]}
                  alt="ape"
                />
              ))}
            </div>
            <div className=" slide-2 grid grid--5x2">
              {images.slice(10, 20).map((img) => (
                <img
                  key={img[0]}
                  className="slide__image"
                  src={img[1]}
                  alt="ape"
                />
              ))}
            </div>
            <div className=" slide-3 grid grid--5x2">
              {images.slice(20, 30).map((img) => (
                <img
                  key={img[0]}
                  className="slide__image"
                  src={img[1]}
                  alt="ape"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="slider__btn-container">
        <svg
          onClick={backslide}
          className="icon"
          style={sectionIndex === 0 ? { opacity: "0.5" } : {}}
        >
                  <use xlinkHref={sprite+"#left-arrow"}></use>
        </svg>
        <svg
          onClick={nextslide}
          className="icon"
          style={sectionIndex === 2 ? { opacity: "0.5" } : {}}
        >
                  <use xlinkHref={sprite+"#right-arrow"}></use>
        </svg>
      </div>
    </>
  );
}

export default Slider;
