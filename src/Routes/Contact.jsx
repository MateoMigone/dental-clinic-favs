import React from "react";
import Form from "../Components/Form";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextGlobal();
  return (
    <div
      className={state.theme}
      style={{ paddingTop: "20px", paddingBottom: "50px", textAlign: "center" }}
    >
      <h2 style={{ marginTop: 0 }}>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
