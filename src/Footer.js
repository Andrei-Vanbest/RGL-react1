import React from "react"


const Footer=(props)=>{

    

    
    return (
        <footer >
            
           <p>{props.num}  {props.num===1?"item" : "items"} </p>
        </footer>
    )
}

export default Footer