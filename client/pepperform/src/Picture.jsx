import React, { useState } from 'react'
import {useDrag} from "react-dnd"

function Output({name,id,val,arr}) {
    const [data,setData]=useState("")
    const [{isDragging},drag]=useDrag(()=>({
        type:"div",
        item:{id:{name,id}},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging(),        }),
    }))
    const HandleForm=(e)=>{
    // console.log(e.target.value)
      setData(e.target.value)
      val["data"]=data
      //console.log(arr)
  
      

    }
  
  
  return (<div className='hello' ref={drag}  key={val.id}>
    <label >{val.name} : </label>
    <input   onKeyUp={(e)=>HandleForm(e)} type={val.name} />
    
 
    </div>
  )
}

export default Output