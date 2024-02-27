import React, { useState } from 'react'
import HookEffctRunOnce from './components/HookEffctRunOnce'


const HookEffctMounseContainer = () => {
    const [display,setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Tooggle display</button>
      {display && <HookEffctRunOnce/>}
    </div>
  )
}

export default HookEffctMounseContainer
