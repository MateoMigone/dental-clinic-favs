import { createContext, useContext, useEffect, useReducer } from "react";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const theme = JSON.parse(localStorage.getItem("theme")) || "";

export const initialState = { theme: theme, dentists: [], favs: lsFavs };

const reducer = (state, action) => {
  switch (action.type) {
    case "getAllDentists":
      return { ...state, dentists: action.payload };

    case "addFav":
      const favs = JSON.parse(localStorage.getItem("favs")) || [];
      const exists = favs.some((fav) => fav.id === action.payload.id);
      if (!exists) {
        alert("Dentist added to favs successfully!");
        return { ...state, favs: [...state.favs, action.payload] };
      } else {
        return state;
      }

    case "removeFav":
      const filterFavs = state.favs.filter((fav) => fav.id !== action.payload);
      alert("Dentist removed from favs successfully!");
      return { ...state, favs: filterFavs };

    case "toggleTheme":
      return state.theme
        ? { ...state, theme: "" }
        : { ...state, theme: "dark" };
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.theme));
  }, [state.theme]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const getAllDentists = async () => {
    const res = await fetch(url);

    const data = await res.json();

    dispatch({ type: "getAllDentists", payload: data });
  };

  useEffect(() => {
    getAllDentists();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
