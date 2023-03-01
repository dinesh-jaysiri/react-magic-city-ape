import React from "react";
import sprite from "../../images/sprite.svg";

function Privilage(props) {
  return (
    <section className="privilage">
      <div className="privilage__header">
        <h3 className="privilage__heading">
          welcome to the mca club privilege's of owning a mca nft's
        </h3>
        <p className="privilage__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. t,
        </p>
      </div>
      <div className="privilage__goal-continer">
        <div className="privilage__goal">
          <svg className="icon">
            <use xlinkHref={sprite + "#sheild"}></use>
          </svg>
          <p>unlimited access</p>
        </div>
        <div className="privilage__goal">
          <svg className="icon">
            <use xlinkHref={sprite + "#trophy"}></use>
          </svg>
          <p>unique nft</p>
        </div>
        <div className="privilage__goal">
          <svg className="icon">
            <use xlinkHref={sprite + "#sheild"}></use>
          </svg>
          <p>unlimited access</p>
        </div>
      </div>
    </section>
  );
}

export default Privilage;
