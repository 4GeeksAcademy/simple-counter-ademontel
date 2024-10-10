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
    if (sentido) {
        seconds++;
    } else {
        seconds--;
    }

    app.render(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">

            <div className="d-flex justify-content-center flex-wrap w-100 px-2">
                <SecondsCounter counter={seconds} />
            </div>

            <div className="text-center mt-4 w-100 px-3">
                <input
                    id="finDelMundo"
                    className="form-control mb-3"
                    onChange={(event) => {
                        seconds = event.target.value;
                    }}
                    placeholder="Ingresar la cantidad de segundos para la cuenta regresiva"
                    type="number"
                />
                <div className="d-flex justify-content-center flex-wrap w-100">
                    <button
                        onClick={() => {
                            clearInterval(intervalo);
                        }}
                        type="button"
                        className="btn m-2 rounded btn-secondary w-25"
                    >
                        Pausar
                    </button>
                    <button
                        onClick={() => {
                            seconds = 0;
                            document.querySelector("#finDelMundo").value = undefined;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-secondary w-25"
                    >
                        Reiniciar
                    </button>
                    <button
                        onClick={() => {
                            intervalo = setInterval(renderSecondsCounter, 1000);
                        }}
                        type="button"
                        className="btn m-2 rounded btn-secondary w-25"
                    >
                        Resumir
                    </button>
                    <button
                        onClick={() => {
                            sentido = !sentido;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-primary w-25"
                    >
                        {sentido ? "PA'TRAS" : "PA'LANTE"}
                    </button>
                </div>
            </div>
        </div>
    );

    if (seconds <= 0) {
        alert("FIN DEL MUNDO!");
        clearInterval(intervalo);
    }
};

intervalo = setInterval(renderSecondsCounter, 1000);
