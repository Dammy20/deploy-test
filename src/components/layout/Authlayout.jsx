import { useHistory } from 'react-router-dom'

function Authlayout({ }) {
    const history = useHistory()
    if (localStorage.getItem('access_token') == null) {
        return history.push("login")
    }
    return (
        <main>
            {children}
        </main>
    )
}




export default Authlayout