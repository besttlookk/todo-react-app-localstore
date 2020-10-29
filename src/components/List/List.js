import React from 'react'
import Item from '../Item/Item'
import './List.css'

const List = ({todos, handleIconClick}) => {


    return (
        <ul className='listContainer' onClick={handleIconClick}>
            {todos && todos.map((todo)=>(
                <Item key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}

export default List
