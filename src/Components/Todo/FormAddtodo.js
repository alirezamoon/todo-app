import React, { useState } from 'react'
import TodosContext from './../Context/todoContext'

const FormTodo = (props) => {

    const [text, setText] = useState('')

    const inputHandler = e => setText(e.target.value)


    return (
        <TodosContext.Consumer>
            {context => {

                const formHandler = e => {
                    e.preventDefault()
                    context.add(text)
                    setText('')
                }

                return (
                    <form className="form-inline" onSubmit={(e) => formHandler(e)}>
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
                )
            }
            }

        </TodosContext.Consumer>
    )


}

export default FormTodo