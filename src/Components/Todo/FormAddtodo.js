import React, { useState } from 'react'

const FormTodo = (props) => {

    const [text, setText] = useState('')


    const inputHandler = e => setText(e.target.value)

    const formHandler = (e) => {
        e.preventDefault()
        props.add(text)
        setText('')
    }

    return (
        <form className="form-inline" onSubmit={formHandler}>
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

export default FormTodo