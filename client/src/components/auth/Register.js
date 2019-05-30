import React, {useState, useContext} from 'react'
import {AuthContext} from '../../lib/auth'


const Register = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { register } = useContext(AuthContext)

    function sendRegister(e) {
        e.preventDefault()

        register(username, password).then(() => {
            props.history.push('/')
        }) 
    }

    return (
        <div>
            <form onSubmit={sendRegister}>
                <input type='text' id='username' name='username' placeholder='username...' onChange={e => setUsername(e.target.value)} />
                <input type='password' id='password' placeholder='password...' onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register