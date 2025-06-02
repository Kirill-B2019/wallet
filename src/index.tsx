// ui/wallet/src/index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Точка входа для SPA-кошелька ГАНИМЕД.
 * Здесь происходит инициализация React-приложения и подключение глобальных стилей.
 */

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
