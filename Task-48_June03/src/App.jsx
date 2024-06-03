import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";

function App(){
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;