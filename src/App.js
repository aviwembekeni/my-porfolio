import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavigationBar from "./components/navigation-bar/navigation-bar.components";
import Preloader from "./components/preloader/preloader.component";
import ScrollToTop from "./components/scroll-to-top.component";
// import Home from "./components/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavigationBar />
        <ScrollToTop />
      </div>
    </Fragment>
  );
}

export default App;
