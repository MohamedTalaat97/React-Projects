import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Componants/Nav/Navigation";
import Jumbo from "./Componants/Nav/Jumbo";
import Search from "./Componants/Search/Search.js";
import Results from "./Componants/Results/Results.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Jumbo />
      <Search />
      <Results />
    </div>
  );
}

export default App;
