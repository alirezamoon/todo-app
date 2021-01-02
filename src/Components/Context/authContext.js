import React from 'react'

const authContext = React.createContext({
    authenticated : false,
    toggleAuth: () => {},
})

export default authContext