import React, { useState } from 'react'
import TodosContext from './../Context/todoContext'

const FormTodo = (props) => {

    const [text, setText] = useState('')

    const inputHandler = e => setText(e.target.value)

    const formHandler = (e , context) => {
        e.preventDefault()
        context.add(text)
        setText('')
    }

    return (
        <TodosContext.Consumer>
            {context => (
                <form className="form-inline" onSubmit={(e) => formHandler(e, context)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mx-sm-3"
                            placeholder="i want to do ..."
                            value={text}
                            onChange={inputHandler} />
                        <button type='submit' className="btn btn-primary">add</button>
                    </div>
                </form>
            )}
        </TodosContext.Consumer>
    )


}

export default FormTodo