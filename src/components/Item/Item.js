import React from 'react'
import './Item.css'


const Item = ({todo}) => {
    return (
        <div className='itemContainer'>
            <div className= {todo.completed ? "itemCompleted item" : "itemRemain item"} id={todo.id}>
                {todo.value}
            </div>
            {todo.completed ? (
                <span className='btn btn-sm btn-info' id="redobtn">Redo</span>
            ): (
                <span className='btn btn-sm btn-success' id="completebtn">Mark Complete</span>
            )}
            <span  id='trashbtn' className='btn btn-sm btn-danger'>Delete Item</span>
       </div>
        
    )
}

export default Item
