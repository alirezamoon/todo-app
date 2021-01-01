import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Layout/Header'
import FormTodo from './Components/Todo/FormAddtodo'
import TodoList from './Components/Todo/TodoList'




class App extends Component {

  state = {
    todos: []
  }

  addToDo = (text) => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { key: Date.now(), done: false, text },
        ]
      }
    })

  }

  deleteTodo = (key) => {
    this.setState(prevState => {
      return { todos: prevState.todos.filter(item => item.key !== key) }
    })
  }

  editTodo = (key, text) => {
    let item = this.state.todos.find(item => item.key === key)
    item.text = text

    let newTodo = this.state.todos.filter(item => item.key !== key)

    this.setState({ todos: [...newTodo, item] })
  }

  toggleTodos = (key) => {
    let item = this.state.todos.find(item => item.key === key)
    item.done = !item.done

    let newTodo = [...this.state.todos.filter(item => item.key !== key)]

    this.setState({ todos: [...newTodo, item] })
  }



  render() {


    return (
      <div>
        <Header />
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="jumbotron-heading">Welcome!</h1>
              <p className="lead text-muted">To get started, add some items to your list:</p>
              <FormTodo add={this.addToDo} />
            </div>
          </section>
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">


                <TodoList
                  delete={this.deleteTodo}
                  toggle={this.toggleTodos}
                  edit={this.editTodo}
                  todos={this.state.todos} />
              </div>

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
