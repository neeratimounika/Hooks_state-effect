import React, { useState } from 'react'


const HookCounterThree = () => {

    const [name,setName] = useState({firstName:'', lastName:''})


  return (
    <div>
        <input 
        type='text' 
        value={name.firstName} 
        onChange={e=>setName({...name, firstName:e.target.value})}/>

<input 
        type='text' 
        value={name.lastName} 
        onChange={e=>setName({...name, lastName:e.target.value})}/>

        <h2>Your FirstName is - {name.firstName}</h2>
        <h2>Your lastName is-{name.lastName}</h2>
      
    </div>
  )
}

export default HookCounterThree
