import React, { useState, useContext } from 'react'
import Todo from "./Todo";
import NavTodo from './NavTodo'
import TodosContext from './../Context/todoContext'

const TodoList = (props) => {

    const todosContext = useContext(TodosContext)

    let { todos } = todosContext
    const [statusDone, setStatusDone] = useState(false)

    let filterTodos = todos.filter(item => item.done === statusDone)


    const toggleStatusDone = () => {
        setStatusDone(!statusDone)
    }

    return (
        <>
            <NavTodo
                statusDone={statusDone}
                toggle={() => toggleStatusDone()} />
            {
                filterTodos.length === 0
                    ? <p>there isn't any todos!</p>
                    : filterTodos.map(item => <Todo
                        key={item.key}
                        item={item} />)
            }
        </>
    )
}

export default TodoList