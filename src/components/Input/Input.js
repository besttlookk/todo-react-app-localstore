import React from 'react'
import './Input.css'

import {Form, Button } from 'react-bootstrap'

const Input = ({input, setInput, handleSubmit}) => {
    return (
        <Form className=' todoForm' onSubmit={input === '' ? null : handleSubmit}>
            <Form.Group className='todo-group'>
                <Form.Control type='text' placeholder='Enter new todo' className='input' value={input} onChange={(e)=>setInput(e.target.value)} name='input'/>
            </Form.Group>
                <Button variant='primary' className='todo-btn' type='submit' >Add</Button>  
        </Form>

        
    )
}

export default Input
