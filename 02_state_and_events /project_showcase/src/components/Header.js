import React, {useState} from "react"; // D1. first thing you gotta do is import react useState

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true) // D1. this is the state, and the setter function
  
  function handleClick(){
    debugger;
    console.log(isDarkMode) 
    setIsDarkMode(!isDarkMode) 
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
