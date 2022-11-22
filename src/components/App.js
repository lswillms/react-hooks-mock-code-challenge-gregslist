import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState("")

  function handleChange(e) {
    setSearch(e.target.value)
  }
  
  return (
    <div className="app">
      <Header search = {search} handleChange = {handleChange} />
      <ListingsContainer search = {search} />
    </div>
  );
}

export default App;
