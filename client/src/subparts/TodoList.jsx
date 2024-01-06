import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const TodoList = (e) => {
    const [display, setdisplay] = useState([])
    const [input, setinput] = useState({value : ''})
    const CreateTodoList = (e) => {
        e.preventDefault()
        setdisplay((prev) => [prev, <li class="list-group-item">{input.value}</li>])
        e.target.reset()
    }
    return (
        <div class="task-contentp">
            <div class="add-items">
                <Form method='post' onSubmit={CreateTodoList} >
                    <input type="text" id='todo' class="form-control" placeholder="What you doing today?" onChange={e => setinput({value : e.target.value})} required/>
                </Form>
            </div>
            <div class="list-wrapper mt-2">
                <ul class="list-group">
                    {display}
                </ul>
            </div>
        </div>
    )
}

export default TodoList