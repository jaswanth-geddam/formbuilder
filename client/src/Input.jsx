import React from 'react'
import {useDrag} from "react-dnd"

function Input({name,id}) {
    const [{isDragging},drag]=useDrag(()=>({
        type:"div",
        item:{id:{name,id}},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging(),        }),
    }))
  return (<div ref={drag} key={id}>
    <label >{name}</label>
    <input type={name}/>
 
    </div>
  )
}

export default Input