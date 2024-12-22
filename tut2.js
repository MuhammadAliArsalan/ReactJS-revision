// const [stateName, stateFunction]= useState(<initial_value>)
import React, { useState } from "react";
/*const Counter=()=>{
    const[number,setNumber]=useState(0);
    return(
        <div>
            <h3>Count:{number}</h3>
            <button onClick={()=>setNumber(number+1)}>Increase</button>
            <button style={{marginLeft:"5px"}}onClick={()=>setNumber(number-1)}>Decrease</button>
            
        </div>
        
    );
};

export default Counter;*/

const ChangeName=()=>{
    const[name,setName]=useState("Ali");

    let nameOfStd=["Ali","Hasan","AHmed","Afzal","Burhan"]

    return(
        <div>
            <h3 style={{marginLeft:"5px"}}>Name:{name}</h3>
            <button onClick={()=>{
 /* Moved the calculation of randomNum inside the onClick handler to ensure it generates
  a new random number each time the button is clicked.      */         
            let randomNum=Math.floor(Math.random()*5);
            setName(nameOfStd[randomNum])}}>
            ChangeName</button>
        </div>

    )
}

export default ChangeName;