//LISTS and KEYS

const Items=()=>{
    const fruits=["Apple","Banana","Plum","Apricot","Mango"];

    return(
        <div>
            <ul>
                {fruits.map((item,index)=>(
                    <li key={index}>{item}</li>

                ))}
            </ul>
        </div>
    )
}

export default Items;