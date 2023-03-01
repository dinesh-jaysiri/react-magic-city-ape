import React, { useState } from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";
import brandlogo from "../images/brand_logo.png";

function NavBar(props) {
  const [collaps, setCollaps] = useState(false);
  return (
    <nav
      onClick={() => setCollaps(!collaps)}
      className={
        collaps
          ? `menu-bar collapsible collapsible--expanded`
          : "menu-bar collapsible"
      }
    >
      <div className="container">
        <Link to={"/#"}>
          <img className="brand__logo" src={brandlogo} alt="brnd" />
        </Link>

        <svg className="icon menu-bar__icon">
          <use xlinkHref={sprite + "#menu"}></use>
        </svg>
        <ul className="nav__list list collapsible__content">
          <li className="list__item">
            <Link to={"/mint"}>Buy an ape</Link>
          </li>
          <li className="list__item">
            <a href={"/#roadmap"}>Roadmap</a>
          </li>
          <li className="list__item">
            <a href={"/#team"}>Team</a>
          </li>
          <li className="list__item">
            <a href={"/#gallary"}>gallery</a>
          </li>
          <li className="list__item">provenance</li>
          <li className="list__item">members</li>
          <li className="list__item">
            <div className="social-icon-container">
              <svg className="icon icon--white">
                <use xlinkHref={sprite + "#discord"}></use>
              </svg>
              <svg className="icon icon--white">
                <use xlinkHref={sprite + "#twitter"}></use>
              </svg>
              <svg className="icon icon--white">
                <use xlinkHref={sprite + "#youtube"}></use>
              </svg>
              <svg className="icon icon--white">
                <use xlinkHref={sprite + "#instergram"}></use>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
