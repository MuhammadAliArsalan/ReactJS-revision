import { useState } from "react";
const DeleteMarks=({delMarks})=>{

    return(
        <div>
            <button onClick={delMarks}>Delete Marks</button>
        </div>
    )

}
export default DeleteMarks;