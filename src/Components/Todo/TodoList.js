import React, { useState } from 'react'
import Todo from "./Todo";
import NavTodo from './navTodo'

const TodoList = (props) => {

    const [statusDone, setStatusDone] = useState(false)

    let filterTodos = props.todos.filter(item => item.done === statusDone)

    const toggleStatusDone = () => {
        setStatusDone(!statusDone)
    }

    return (
        <>
            <NavTodo
                todos={props.todos}
                statusDone={statusDone}
                toggle={() => toggleStatusDone()} />
            {
                filterTodos.length === 0
                    ? <p>there isn't any todos!</p>
                    : filterTodos.map(item => <Todo
                        key={item.key}
                        item={item}
                        delete={props.delete}
                        toggle={props.toggle}
                        edit={props.edit} />)
            }
        </>
    )
}

export default TodoList