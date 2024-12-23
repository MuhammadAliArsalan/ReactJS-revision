//ADDNG MARKS

import { use, useState } from "react";

const AddMarks=({addMarks})=>{

    const[newMark,setNewMark]=useState("")   // Local state for new mark input

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!newMark) return;
        addMarks(newMark);  /// Add the new mark using the addMarks function passed from the parent
        setNewMark("");

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Marks:
                    <input 
                    type="number"
                    value={newMark}
                    required
                    placeholder="Enter marks"
                    onChange={(e)=>setNewMark(e.target.value)}
                    />
                </label>
                <button style={{marginLeft:"10px"}} type="submit">Add Marks</button>
            </form>
        </div>
    )

    
}

export default AddMarks;
