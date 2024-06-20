import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shownName, setShownName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.name.trim().length > 5 && regex.test(user.email)) {
      setShowError(false);
      setShowSuccess(true);
      setShownName(user.name);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          onChange={(event) =>
            setUser({
              ...user,
              name: event.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) =>
            setUser({
              ...user,
              email: event.target.value,
            })
          }
        />
        <button>Send</button>
      </form>
      {showError && <p>Por favor verifique su información nuevamente</p>}
      {showSuccess && (
        <p>Gracias {shownName}, te contactaremos cuando antes vía mail</p>
      )}
    </div>
  );
};

export default Form;
