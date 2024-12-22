import React,{ useState} from "react";

const FormHandler=()=>{
    const[name,setName]=useState("null");
    const[age,setAge]=useState(0);

    function changeName(e){
        setName(e.target.value)
    }
    function changeAge(e){
        setAge(parseInt(e.target.value));
    }

    //The value attribute specifies the current value of the input field.
    /*
    This means that the input field's displayed value is controlled by React state.
    Any changes to the state automatically update the value of the input field.
    If name is updated using setName, the displayed value in the input field changes automatically.
     */

    //The onChange attribute specifies an event handler function that runs whenever the user types into the input field or makes a change.
    /*Here, onChange={changeName} means that whenever the user types something, the
    changeName function is called. */
    return(
        <div>
            <form style={{margin:"10px"}}>
               <label>
                 Name:
                <input type="text" value={name} onChange={changeName}></input>

               </label>
               <label>
                Age:
                <input type="number" value={age} onChange={changeAge}></input>
               </label>
            </form>

            <p style={{margin:"10px",color:"brown"}}>
                Your name is {name} and your age is {age}
            </p>
        </div>
    )
}

export default FormHandler;