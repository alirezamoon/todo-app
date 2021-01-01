import React from 'react'

const NavTodo = (props) => {
    let filterTodosDone = props.todos.filter(item => item.done === true)
    let filterTodosUndone = props.todos.filter(item => item.done === false)

    return (
        <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                    className={`nav-item nav-link font-weight-bold ${props.statusDone ? '' : 'active'}`}
                    id="nav-home-tab"
                    onClick={props.toggle}>undone
            <span className="badge badge-secondary">{filterTodosUndone.length}</span>
                </a>
                <a
                    className={`nav-item nav-link font-weight-bold ${props.statusDone ? 'active' : ''}`}
                    id="nav-profile-tab"
                    onClick={props.toggle}>done
            <span className="badge badge-success">{filterTodosDone.length}</span></a>
            </div>
        </nav>
    )
}

export default NavTodo