import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./components/ui/provider.jsx";
import Dashboard from "./Dashboard";
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Dashboard />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
