import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
