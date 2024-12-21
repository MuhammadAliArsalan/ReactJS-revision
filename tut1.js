const Header=()=>{

    let styleOfh1={
        color:"blue",
        fontSize:"20px",

    }
    let styleOfp={
        color:"red",
        fontSize:"15px",
        fontWeight:"600"
        
    }
    return(
        <div>
            <h1 style={styleOfh1}>WELCOME TO REACT COURSE</h1>
            <p style={styleOfp}>I will teach you react</p>
        </div>
    )
}
export default Header;