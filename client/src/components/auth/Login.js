import React, {useState, useContext} from "react"
import {Link} from 'react-router-dom'
import {AuthContext} from '../../lib/auth'

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signin} = useContext(AuthContext)

    function sendLogin(e) {
        e.preventDefault()

        signin(username, password).then(() => {
            props.history.push('/')
        })
    }

    return (
        <div>
            <form onSubmit={sendLogin}>
                <input type='text' id='username' name='username' placeholder='username...' onChange={e => setUsername(e.target.value)} />
                <input type='text' id='password' name='password' placeholder='password...' onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}
export default Login