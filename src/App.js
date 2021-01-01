import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header'
import FormTodo from './Components/FormAddtodo'
import Todo from "./Components/Todo";

class App extends Component {

  state = {
    todos: [],
    statusDone: false
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


  render() {

    let filterTodos = this.state.todos.filter(item => item.done === this.state.statusDone)
    let filterTodosDone = this.state.todos.filter(item => item.done === true)
    let filterTodosUndone = this.state.todos.filter(item => item.done === false)


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
                <nav className="col-6 mb-3">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className={`nav-item nav-link font-weight-bold ${this.state.statusDone ? '' : 'active'}`}
                      id="nav-home-tab"
                      onClick={() => this.setState({ statusDone: false })}>undone
                    <span className="badge badge-secondary">{filterTodosUndone.length}</span>
                    </a>
                    <a
                      className={`nav-item nav-link font-weight-bold ${this.state.statusDone ? 'active' : ''}`}
                      id="nav-profile-tab"
                      onClick={() => this.setState({ statusDone: true })}>done
                    <span className="badge badge-success">{filterTodosDone.length}</span></a>
                  </div>
                </nav>
                {
                  filterTodos.length === 0
                    ? <p>there isn't any todos!</p>
                    : filterTodos.map(item => <Todo key={item.key} text={item.text} />)
                }


              </div>

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
