import React from 'react'
import {IState as IProps} from '../App'
const List:React.FC<IProps>=({people})=>{
    const renderList=()=>{
      return  people.map((p)=>{
          return  <li className='list'>
            <div className='list-img'>
               <img src={p.url} alt={p.name} />
               <h1>
               {p.name}
             </h1>
            </div>
            <p>{p.age} years old</p>
            <p>{p.note}</p>        
        </li>
        })
    }
    return (
        <ul>
          {renderList()}
        </ul>
    )
}

export default List
