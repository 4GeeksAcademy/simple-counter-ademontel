//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import {SecondsCounter} from "./component/secondsCounter.jsx";
let seconds = 0;
let intervalo; 
let sentido = true;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds}/>)
const renderSecondsCounter = () => {
    if(sentido){
        seconds++
    } else {
        seconds--
    };
    app.render(<>
        <SecondsCounter counter={seconds} />
        <div>
        <input id="finDelMundo" className="" onChange={ (event) => {
            seconds = event.target.value;
        }}
         placeholder="Ingresar la cantidad de segundos para la cuenta regresiva" type="number" />
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={()=>{
                clearInterval(intervalo);
            }} type="button" className="btn btn-secondary">Pausar</button>
            <button onClick={() => {
                seconds = 0;
                document.querySelector("#finDelMundo").value = undefined;
            }} type="button" className="btn btn-secondary">Reiniciar</button>
            <button onClick={()=>{
                intervalo = setInterval(renderSecondsCounter,1000);
            }} type="button" className="btn btn-secondary">Resumir</button>
            <button onClick={()=>{
                sentido = !sentido;
            }} type="button" className="btn btn-primary">{sentido ? "PA'TRAS" : "PA'LANTE"}</button>
            
        </div>
        </div>
        </>)
        if(seconds <= 0){
            alert("FIN DEL MUNDO!");
            clearInterval(intervalo);
        };}
intervalo = setInterval (renderSecondsCounter,1000);


