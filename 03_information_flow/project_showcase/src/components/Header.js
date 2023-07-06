import React, {useState} from "react";

const Header = ({isDarkMode, onToggleDarkMode}) => {

  //Update state when button is clicked
  // const handleClick = () => {
  //   setIsDarkMode(!isDarkMode)
  // }
  
  function handleClick(){
    onToggleDarkMode()
  }
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
