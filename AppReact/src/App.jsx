import { Fragment } from 'react';
import Mensaje from './componente/Mensaje'
import Encabezado from './componente/Encabezado'
import Pie from './componente/Pie'
import Ciudad from './componente/Ciudad'


function App() {

  return (
    <>
      <Encabezado />
      <Ciudad
      nombre = "Lima"
      descripcion = "Capital del Perú"
      imagen = 'https://www.xtravelperu.com/wp-content/uploads/2017/09/lima-miraflores-x-travel-peru.jpg'
       />
      <Ciudad
      nombre = "Arequipa"
      descripcion= "Encantadora tierra volcánica"
      imagen = "https://www.peru.travel/Contenido/Destino/Imagen/es/3/1.2/Principal/Plaza%20de%20Armas%20Arequipa.jpg" />

      <Pie />
    </>
  );

}

export default App;