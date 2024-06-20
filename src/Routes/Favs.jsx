import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <div
      className={state.theme}
      style={{ paddingBottom: "50px", paddingTop: "20px" }}
    >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((fav) => (
          <Card
            name={fav.name}
            username={fav.username}
            id={fav.id}
            key={fav.id}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Favs;
