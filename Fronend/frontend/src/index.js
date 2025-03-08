import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Importar estilos globales
import "react-datepicker/dist/react-datepicker.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
