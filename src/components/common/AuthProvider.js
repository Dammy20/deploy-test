import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        message: "",
        email: "",
        fullname: "",
        googleEmail: "",
        googleName: ""
    })
    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider