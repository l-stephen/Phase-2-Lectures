<<<<<<< HEAD
import React, {useState} from "react"; // D1. first thing you gotta do is import react useState

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true) // D1. this is the state, and the setter function
  
  function handleClick(){
    debugger;
    console.log(isDarkMode) 
    setIsDarkMode(!isDarkMode) 
  }
  
=======
import React, {useState} from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleClick(){
    debugger;
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }
>>>>>>> 78e2b1c29ea179308715542c53fcccb9daf73b47
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
<<<<<<< HEAD
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button> 
=======
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
>>>>>>> 78e2b1c29ea179308715542c53fcccb9daf73b47
    </header>
  );
}

export default Header;
