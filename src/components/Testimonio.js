import React from "react";
import '../styles/Testimonio.css'

function Testimonio (props){
    return(
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                // src={require('../images/one.jpeg')}
                src={require(`../images/${props.imagen}.jpeg`)}
                alt='fotos' />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> <strong>{props.nombre} en {props.pais}with React</strong></p>
                <p className="cargo-testimonio">{props.cargo} in {props.empresa}</p>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio
