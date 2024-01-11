// Import the necessary modules
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    
    const initialState = JSON.parse(localStorage.getItem('authState')) || {
        message: "",
        email: "",
        firstName: "",
        lastName: "",
        googleEmail: "",
        googleName: ""
    };

    
    const [state, setState] = useState(initialState);

    
    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(state));
    }, [state]);
     
    return (
        <AuthContext.Provider value={{ state, setState}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
