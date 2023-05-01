import React from "react";
import "./App.scss";
import "./styles";
import { FilterMenu, Gallery, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterMenu />
      <Gallery />
    </div>
  );
}

export default App;
