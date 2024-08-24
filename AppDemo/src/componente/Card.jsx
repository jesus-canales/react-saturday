import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../image/imagen.png';

function MiCard() {
    return (
        <>
            <div className="card" style={{width:'18rem;'}}>
                <img src={Card} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    );
}

export default MiCard;