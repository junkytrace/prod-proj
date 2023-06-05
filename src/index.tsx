import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "./shared/config/i18n/i18n";
import React from "react";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
