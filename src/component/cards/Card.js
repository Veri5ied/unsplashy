import React from "react";

function Card({ pictures }) {
  return (
    <div className="card__list">
      {pictures.map((pic) => {
        <div className="card" key={pic.id}>
          <img
            src={pic.urls.full}
            alt={pic.alt_description}
            width="50%"
            height="50%"
            className="card__image"
          />
        </div>;
      })}
    </div>
  );
}

export default Card;
