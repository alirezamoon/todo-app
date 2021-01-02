import React, { useState } from 'react'
import EditTodo from './EditTodo'
import TodoContext from './../Context/todoContext'


const Todo = (props) => {


    const [edit, setEdit] = useState(false)

    return (
        <TodoContext.Consumer>
            {context => (
                <>
                    {!edit ?
                        (<div className="col-6 mb-2">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {props.item.text}
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className={`btn btn-${props.item.done ? 'warning' : 'success'} btn-sm`}
                                        onClick={() => context.toggle(props.item.key)}>
                                            {props.item.done ? 'undone' : 'done'}</button>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-sm ml-1"
                                        onClick={() => setEdit(true)}>edit</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm ml-1"
                                        onClick={() => context.delete(props.item.key)}>delete</button>
                                </div>
                            </div>
                        </div>)
                        : <EditTodo
                            key={props.item.key}
                            item={props.item}
                            edit={context.edit}
                            clicked={() => setEdit(false)} />
                    }
                </>
            )}
        </TodoContext.Consumer>
    )
}


export default Todo


