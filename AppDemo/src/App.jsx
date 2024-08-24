import { Fragment } from "react";
import Mensaje from "./componente/Mensaje";
import Contador from './componente/Contador';
import MiCard from './componente/Card';
import Lista from './componente/Lista'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Mensaje />
      <Contador />
      <MiCard />
      <Lista />
    </>
  );
}

export default App;