


import React from "react"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import {useState} from "react"
import AddItem from "./AddItem"
import SearchItem from './SearchItem'
import Chalange1 from './Chalange_Color'



function App() {

  const[items,setItem]=useState(()=> {
    const stored = localStorage.getItem('shoppinglist');
    if(stored){
      try{
        return JSON.parse(stored)
      } catch (e){
        console.log('error receivingstored items',e)
      }
    }
    return[]
  })
   
const[newItem,setNewItem]= useState('')
const[search,setSearch] = useState('')
const[rend,setRend]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return
  addItem(newItem)
  setNewItem('')
}

const setAndSaveItems =(newItems)=>{
  setItem(newItems)
  localStorage.setItem('shoppinglist', JSON.stringify(newItems))
}

const addItem =(item)=>{
  const id =items.length?  items[items.length-1].id+1 :1;
  const myNewItem = {id,checked: false,item}
  const listItems = [...items,myNewItem]
  setAndSaveItems(listItems)
}


const handleCheck =(id)=>{
  const listItems =  items.map(item=> item.id===id ? {...item,checked:!item.checked} : item)
  setAndSaveItems(listItems)
}

const handleDelete =(id)=>{

 const listItems = items.filter(item=> item.id !==id)
 setAndSaveItems(listItems)
}
  return (
    <div className="App" >
      <Header title="Raw grocery list "/>
      <div style={{backgroundColor:"blue",width:"100%"}}>
      <Chalange1 rend={rend}
                 setRend={setRend}/>
      <SearchItem search={search}
                  setSearch={setSearch}/>
      <AddItem newItem={newItem}
               setNewItem={setNewItem}
               handleSubmit={handleSubmit}
               />
      </div>
    <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
               rend={rend}
                />
      <Footer num={items.length} />
      
      
    </div>
    
  )
}
export default App
