import { Fragment, useState } from "react";

function Contador(){
    const [ contar, setContar ] = useState(0);
    const hacerClic = () =>{
        setContar(contar + 1);
    }

    return(
        <>
        <p>Haz realizado {contar} veces clic en el botón </p>
        <button onClick={hacerClic} >Contar</button>
        </>
    );
}

export default Contador;