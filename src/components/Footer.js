import React from 'react';
import Collapsible from './Collapsible';
import brandlogo from "../images/brand_logo.png";
import sprite from "../images/sprite.svg"

function Footer(props) {
    let linkRow1 = (
    <>
        <ul className="list">
            <li className="list__item">buy and ape</li>
            <li className="list__item">roadmap</li>
            <li className="list__item">our team</li>
            <li className="list__item">gallery</li>
        </ul>
        <ul className="list">
            <li className="list__item">provenance</li>
            <li className="list__item">members</li>
        </ul>
    </>
)

let linkRow2 = (
    <ul className="list">
        <li className="list__item">Contact us</li>
        <li className="list__item">faq</li>
        <li className="list__item">
            <div className="social-icon-container">
                <svg className="icon icon--white">
                    <use xlinkHref={sprite + "#discord"}></use>
                </svg>
                <svg className="icon icon--white">
                    <use xlinkHref={sprite+"#twitter" }></use>
                </svg>
                <svg className="icon icon--white">
                    <use xlinkHref={sprite+ "#youtube"}></use>
                </svg>
                <svg className="icon icon--white">
                    <use xlinkHref={sprite +"#instergram" }></use>
                </svg>
            </div>
        </li>
    </ul>)
    return (
      <footer className="block block--dark footer">
        <div className="container">
          <div className="footer__link">
            <Collapsible header="Site Links" description={linkRow1} />
            <Collapsible header="Info" description={linkRow2} />

            <img className="footer__brand" src={brandlogo} alt="" />
          </div>

          <div className="footer__copyright">
            <p>&copy; ywdinesh@gmail.com {new Date().getFullYear()}</p>
            <p className="footer__terms">Terms & Conditions | Privacy policy</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;