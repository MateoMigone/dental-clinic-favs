import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContextGlobal();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState();
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  const getDentist = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <div className={state.theme} style={{ padding: "20px 0 50px" }}>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      {dentist && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Detail;
