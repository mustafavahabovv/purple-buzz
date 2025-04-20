import {createRoot} from 'react-dom/client'
import Router from "./router/Router.jsx";
import {StrictMode} from "react";
import "./styles/custom.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router/>
    </StrictMode>,
)
