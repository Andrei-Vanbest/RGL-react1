import React from "react"


const Chalange1 = ({rend,setRend})=>{

    
   return(
   <div style={{display:"flex"}}>
       <h4>Color changer</h4>
      <div style={{backgroundColor:rend}}>
          {!rend && ''}
         

      </div>

      <input    type='text'
                onSubmit={e=>e.preventDefault()}
                value={rend}
                onChange={e=>setRend(e.target.value)}
                placeholder='Add favorite colore'
                />
      
      



   </div>

 )
}



export default Chalange1

