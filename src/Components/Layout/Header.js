import React, { useContext } from 'react'
import AuthContext from './../Context/authContext'
import TodosContext from './../Context/todoContext'

const Header = () => {

  const authContext = useContext(AuthContext)
  const todosContext = useContext(TodosContext)

  console.log(todosContext)

  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Todo App</strong>
          </a>

        </div>
        {authContext.authenticated
        ? <button className='btn btn-sm btn-danger' onClick={() => authContext.toggleAuth()}>logout</button>
        : <button className='btn btn-sm btn-success' onClick={() => authContext.toggleAuth()}>login</button>
      }
      </div>

    </header>
  )
}

export default Header