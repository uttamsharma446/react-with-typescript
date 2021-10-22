import React, { useState } from 'react'
import {IState as Props} from '../App'
interface IProps{
    people:Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
const  AddToList:React.FC<IProps>=({setPeople,people})=> {
    const [input,setInput]=useState({
        name:'',
        age:'',
        img:'',
        notes:''

    })
  const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement |HTMLInputElement>):void=>{
      const {value,name}=e.target;
      setInput({
          ...input,
          [name]:value
      })

  }
  const handleClick=()=>{
      if(         
        !input.name||
          !input.age||
          !input.img        
      ){return }
      setPeople([
          ...people,
          {
              name:input.name,
              age:parseInt(input.age),
              url:input.img,
              note:input.notes
          }
      ])
      setInput({
          age:"",
          img:"",
          name:"",
          notes:""
      })

      
      

  }
    return (
        <div className='addtolist'>
           <input onChange={handleChange} value={input.name} className='addlist-input' type="text" name="name" id="" placeholder="Name" />
           <input onChange={handleChange} value={input.age} className='addlist-input' type="text" name="age" id="" placeholder="Age" />
           <input onChange={handleChange} value={input.img} className='addlist-input' type="text" name="img" id="" placeholder="Image Url" />
           <textarea onChange={handleChange} className='addlist-textarea' value={input.notes} name="notes" id="" placeholder="Notes" />
            <button 
            onClick={handleClick}
            className='addlist-btn'>Add to List</button>
        </div>
    )
}

export default AddToList
