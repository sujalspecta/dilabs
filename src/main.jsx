import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-modal-video/css/modal-video.min.css";

import ErrorBoundary from "./components/error/ErrorBoundary.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
