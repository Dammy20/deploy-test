import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

const UserRoute = ({ children }) => {
    const history = useHistory()
    const token = localStorage.getItem("access_token")
    useEffect(() => {
        if (!token) {
            history.push('/login')
        }
    }, [history, token])

    return <>{children}</>;

}

export default UserRoute
