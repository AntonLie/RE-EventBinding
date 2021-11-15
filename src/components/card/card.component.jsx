import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set4&size=200x200`}
        alt={`monster-image-${props.monster.id}`}
      />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
