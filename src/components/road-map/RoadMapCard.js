import React from 'react';

function RoadMapCard({precentage="10%",description="description goes here..", handle="left"}) {
    return (
      <div className="road-map__card-container road-map__card">
        <div className="road-map__card-content">
          <p className="road-map__percentage">{precentage}</p>
          <p className="road-map__description">{description}</p>
        </div>
        <div
          className={
            handle === "left"
              ? "road-map__card-handle-left"
              : "road-map__card-handle-right"
          }
        >
          <div className="handle-arm"></div>
          <div className="handle-ball"></div>
        </div>
      </div>
    );
}

export default RoadMapCard;