import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();
  const bool = true;
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
