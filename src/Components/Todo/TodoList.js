import React, { useState } from 'react'
import Todo from "./Todo";
import NavTodo from './navTodo'
import TodoContext from './../Context/todoContext'
const TodoList = (props) => {

    const [statusDone, setStatusDone] = useState(false)


    const toggleStatusDone = () => {
        setStatusDone(!statusDone)
    }

    return (
        <TodoContext.Consumer>
            {context => (
                <>
                    <NavTodo
                        todos={context.todos}
                        statusDone={statusDone}
                        toggle={() => toggleStatusDone()} />
                    {
                        context.todos.filter(item => item.done === statusDone).length === 0
                            ? <p>there isn't any todos!</p>
                            : context.todos.filter(item => item.done === statusDone)
                                .map(item => <Todo key={item.key} item={item} />)
                    }
                </>
            )}
        </TodoContext.Consumer>
    )
}

export default TodoList