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
import AddMarks from './tut7.js';


function App() {

  const [marks, setMarks] = useState([{
    id: 1,
    mark: 92
  },
  {
    id: 2,
    
    mark: 90
  }])

  const addMarks = (newMark) => {
    let newId = marks.length ? marks[marks.length - 1].id + 1 : 1;
    let newMarkObject={id:newId,mark:newMark};  //creating a new mark object
    let newMarks=[...marks,newMarkObject];
    setMarks(newMarks);
  }

  const delMarks=(id)=>{
    let newMark=marks.filter((mark)=>mark.id!=id);
    setMarks(newMark);
  }

  // const deleteMarks=(mark)=>{
  //   let delMarks=marks.filter((mark)=>mark.id!=id)
  // }

  const lightMode = {
    backgroundColor: "wheat",
  }
  const darkModes = {
    backgroundColor: "orange",
  }
  const [darkMode, setDarkMode] = useState(false);
  /*In the toggleMode function, you're using setDarkMode to update the state. The argument 
  passed to setDarkMode is a function that takes the previous state (prevMode) as its
  argument and flips its value
  */

  /*
  prevMode: This is the current value of the state (darkMode), 
  which is either true (dark mode) or false (light mode).
   */
  const toggleMode = () => setDarkMode(prevMode => !prevMode);


  return (
    <div style={darkMode ? darkModes : lightMode}>
      <button onClick={toggleMode}>Toggle to {darkMode ? "Light" : "Dark"} Mode</button>
      <Header name="Ali Arslan" />

      <ChangeName />
      <FormHandler />

      {/*Each instance passes the "name" and "tool" as props to the Tools component. */}
      <Tools name="Ali" tool="Figma" />
      <Tools name="Hasan" tool="NodeJS" />

      <Items />
      <Information />

      <AddMarks addMarks={addMarks}
      />
      <p style={{marginTop:"2rem"}}>All Marks</p>

      
      <ul>
      {marks.length ? (
        marks.map((mark)=>(
          <li key={mark.id}><strong>{mark.mark}</strong>
          <button style={{marginLeft:"6px",borderRadius:"30px"}} onClick={()=>delMarks(mark.id)}>DELETE</button>
          
          </li>  
        
        ))
      ):(
        <strong>Your list is empty</strong>
      )

}
      </ul>
    </div>
  );
}

export default App;
