import React, { useState } from "react";
import sprite from "../images/sprite.svg";

function Collapsible({ header, description, Collapsible = false }) {
  const [collaps, setCollaps] = useState(false);
  return (
    <>
      <div
        onClick={() => setCollaps(!collaps)}
        className={
          collaps ? `collapsible collapsible--expanded` : "collapsible"
        }
      >
        <header className="collapsible__header">
          <h2 className="collapsible__heading">{header ? header : ""}</h2>
          <svg className="icon icon--primary icon--white collapsible__chevron">
            <use xlinkHref={sprite + "#chevron"}></use>
          </svg>
        </header>
        <div className="collapsible__content">
          {description ? description : ""}
        </div>
      </div>
    </>
  );
}

export default Collapsible;
