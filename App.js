//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import "./tut1.js";
import Header from './tut1.js';
import ChangeName from './tut2.js';
import FormHandler from './tut3.js';
import Tools from './tut4.js';
import Items from './tut5.js';
import Information from './tut6.js';

function App() {
  
  const lightMode={
    backgroundColor:"wheat",
  }
  const darkModes={
    backgroundColor:"orange",
  }
  const[darkMode,setDarkMode]=useState(false);
  /*In the toggleMode function, you're using setDarkMode to update the state. The argument 
  passed to setDarkMode is a function that takes the previous state (prevMode) as its
  argument and flips its value
  */
 
 /*
 prevMode: This is the current value of the state (darkMode), 
 which is either true (dark mode) or false (light mode).
  */
  const toggleMode=()=>setDarkMode(prevMode => ! prevMode);

  return (
    <div style={darkMode ? darkModes:lightMode}>
      <button onClick={toggleMode}>Toggle to {darkMode ? "Light":"Dark"} Mode</button>
      <Header name="Ali Arslan"/>
    
      <ChangeName />
      <FormHandler />  

      {/*Each instance passes the "name" and "tool" as props to the Tools component. */}
      <Tools name="Ali" tool="Figma" />
      <Tools name="Hasan" tool="NodeJS"/>

      <Items />
      <Information />

      
    </div>
  );
}

export default App;
