import React from "react"
import ItemList from "./ItemList"




const Content=({items,handleCheck,handleDelete,rend,})=>{

    



    

    
                    
return (
        <main style={!rend? {backgroundColor:"red" , height:"200px"} :  {backgroundColor:rend}} >
            <ItemList items={items}
                      handleCheck={handleCheck}
                      handleDelete={handleDelete}
                       />

           
       </main>
    )
}

export default Content