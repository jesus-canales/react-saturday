import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./componente/Menu";
import DarkVariantExample from "./componente/Carrusel";
import GroupExample from "./componente/Cards";

function App() {
  return (
    <>
      <Menu />
      <br />
      <DarkVariantExample />
      <br />
      <br />
      <GroupExample />
    </>
  );
}

export default App;