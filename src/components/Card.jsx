import React from "react";

const Card = ({data}) => {
  return (
    <div className="card">
      <h2>Hola! {data.name}</h2>
      <p>Sabemos que tu libro favorito es: <b>{data.book}</b></p>
    </div>
  );
};


export default Card;