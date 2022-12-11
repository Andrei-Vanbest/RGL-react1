import React from "react"


const Header=(props)=> {
    return(
        <header className="Header">
        <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title:"Eu sunt cel mai bun"


}

export default Header 