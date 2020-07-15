import React from "react";
import "./App.css";
import ListOfGifs from "./Components/ListOfGifs";
import { Route } from "wouter";
import Find from "./Components/Find";
import QuickFinder from "./Components/QuickFinder";
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="container">
      <h2>App Gifs</h2>
      <Find />
      <QuickFinder />
      <Route
        component={ListOfGifs}
        path="/gif/:keyword"
      />
      <Footer />
    </div>
  );
}

export default App;
