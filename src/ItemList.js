import React from "react"
import LineItem from "./LineItem"


const ItemList=({items,handleCheck,handleDelete})=>{

    

    
    return (
        <div >
            
        <ul>
           
        {items.length===0? <h1>The list is empty</h1> : items.map(item=> <LineItem 
                                                                        key={item.id}
                                                                        item={item}
                                                                        handleCheck={handleCheck}                          
                                                                        handleDelete={handleDelete}  />)}
           </ul>

        </div>
    )
}

export default ItemList