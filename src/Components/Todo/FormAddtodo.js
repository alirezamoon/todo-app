import React, { Component } from 'react'
import TodosContext from './../Context/todoContext'

class FormTodo extends Component {

    state = { text : ''}

    static contextType = TodosContext
    



    inputHandler = e => this.setState({text : e.target.value})

    formHandler = (e) => {
        e.preventDefault()
        this.context.add(this.state.text)
        this.setState({ text : ''})
    }


    
    render () {
        return(
            <form className="form-inline" onSubmit={this.formHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control mx-sm-3"
                    placeholder="i want to do ..."
                    value={this.state.text}
                    onChange={this.inputHandler} />
                <button type='submit' className="btn btn-primary">add</button>
            </div>
        </form>
        )
    }
}

export default FormTodo