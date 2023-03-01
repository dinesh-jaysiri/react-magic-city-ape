import React from 'react';
import ape1 from "../../images/apes/4.png"
import ape2 from "../../images/apes/6.png";
import ape3 from "../../images/apes/10.png";
import ape4 from "../../images/apes/28.png";

function OurTeam(props) {
    return (
      <section id="team" className="block block--purple-to-black our-team">
        <div className="container">
          <header className="block__header">
            <h2 className="block__heading">MEAT THE TEAM</h2>
            <p className="block__description">
              MAC was created by four friends who set out to make some dope
              apes, test our skills, and try to build somthing (ridiculous)
            </p>
          </header>

          <div className="grid grid--1x4 our-team__container">
            <div className="media">
              <img className="media__image" src={ape1} alt="Team Member Image" />
              <h4 className="media__heading">Dinesh</h4>
              <p className="media__description">
                starcraft obsessed east smurfs
              </p>
            </div>
            <div className="media">
              <img className="media__image" src={ape2} alt="" />
              <h4 className="media__heading">Jayasiri</h4>
              <p className="media__description">reformed leverage addict</p>
            </div>
            <div className="media">
              <img className="media__image" src={ape3} alt="" />
              <h4 className="media__heading">Samranayaka</h4>
              <p className="media__description">
                spent all their money on first presses and pet-nat
              </p>
            </div>
            <div className="media">
              <img className="media__image" src={ape4} alt="" />
              <h4 className="media__heading">Ywadjs</h4>
              <p className="media__description">
                here for the apes not for the sass
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurTeam;