import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

// Components
import Header from './Components/Layout/Header'
import FormTodo from './Components/Todo/FormAddtodo'
import TodoList from './Components/Todo/TodoList'

// Contexts
import TodosContext from './Components/Context/todoContext'
import AuthContext from './Components/Context/authContext'


class App extends Component {

  state = {
    todos: [],
    authenticated: false
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

  toggleAuth = () => {
    this.setState({ authenticated: !this.state.authenticated })
  }


  render() {


    return (
      <AuthContext.Provider value={{
        authenticated: this.state.authenticated,
        toggleAuth: this.toggleAuth,
      }}>
        <TodosContext.Provider value={{
          delete: this.deleteTodo,
          add: this.addToDo,
          toggle: this.toggleTodos,
          edit: this.editTodo,
          todos: this.state.todos,
        }}>
          <div>

            <Header />
            <main>
              <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                  <h1 className="jumbotron-heading">Welcome!</h1>
                  <p className="lead text-muted">To get started, add some items to your list:</p>
                  <FormTodo />
                </div>
              </section>
              <div className="todosList">
                <div className="container">
                  <div className="d-flex flex-column align-items-center ">
                    <TodoList />
                  </div>

                </div>
              </div>
            </main>
          </div>
        </TodosContext.Provider>
      </AuthContext.Provider>

    );
  }
}

export default App;
