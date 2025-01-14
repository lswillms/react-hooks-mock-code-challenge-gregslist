import React from "react";
import Search from "./Search";

function Header({ search, handleChange }) {

  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search = {search} handleChange={handleChange} />
    </header>
  );
}

export default Header;
