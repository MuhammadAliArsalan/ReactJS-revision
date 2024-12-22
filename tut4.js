/*const Tools=(props)=>{

    /*The Tools component accepts a props object as an argument.
     props.name and props.tool are destructured into local variables name and tool. 
    
     const name=props.name;
    const tool=props.tool;
    return(
        <div style={{color:"red",fontWeight:"600"}}>
            <p>My name is {name} and my favorite tool is {tool} </p>
        </div>
    )
}*/

//2nd method -- props destructiring

const Tools=({name,tool})=>{
    return(
        <div style={{color:"royalblue"}}>
            <p>My name is {name} and my favorite tool is {tool}</p>
        </div>
    )
}

export default Tools;
