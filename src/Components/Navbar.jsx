import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  return (
    <nav className={state.theme}>
      <h2>
        <span style={{ color: "#d50000" }}>D</span>ental{" "}
        <span style={{ color: "#d50000" }}>C</span>linic
      </h2>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button
          onClick={() => {
            dispatch({ type: "toggleTheme" });
          }}
          className={state.theme}
        >
          {state.theme ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
