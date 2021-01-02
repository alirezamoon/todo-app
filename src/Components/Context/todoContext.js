import React from 'react'

const todoContext = React.createContext({
    delete: () => {},
    add: () => {},
    edit: () => {},
    toggle: () => {},
    todos: []
})



export default todoContext