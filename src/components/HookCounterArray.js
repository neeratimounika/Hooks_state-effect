import React, { useState } from 'react'



const HookCounterArray = () => {
    const [items,setItems] =useState([])

    const addItem =()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1 
        }])

    }


  return (
    <center>
        <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
            {
                items.map(item=><li key={item.id}>{item.value}</li>)
            }
        </ul>
      
    </div>
    </center>
  )
}

export default HookCounterArray
