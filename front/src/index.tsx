import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import { VehicleProvider } from "./contexts/state";
import { ThemeProvider } from "styled-components";
import { color } from "./global/styles";
import { App } from "./routes";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={color}>
                <VehicleProvider>
                    <App />
                </VehicleProvider>
            </ThemeProvider>
            <GlobalStyle />
        </BrowserRouter>
    </React.StrictMode >
);
