import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();

  const [faved, setFaved] = useState(false);

  useEffect(() => {
    const exists = state.favs.some((fav) => fav.id === id);
    exists ? setFaved(true) : setFaved(false);
  });

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <img src="/images/doctor.jpg" alt="Doctor image" />
      <Link to={"/dentist/" + id}>
        <h4>{name}</h4>
      </Link>
      <p>{username}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {!faved && (
        <button
          onClick={() =>
            dispatch({ type: "addFav", payload: { name, username, id } })
          }
          className={"favButton " + state.theme}
        >
          ⭐
        </button>
      )}

      {faved && (
        <button
          onClick={() => dispatch({ type: "removeFav", payload: id })}
          className={"favButton " + state.theme}
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default Card;
