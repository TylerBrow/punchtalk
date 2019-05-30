import React, {useState, useContext} from 'react'
import { send } from '../../actions/actions';
import {AuthContext} from '../../lib/auth'


const Input = props => {

    const [text, enterText] = useState('')
    const {user} = useContext(AuthContext)
    console.log(user)
    function sendText(e) {
        e.preventDefault()

        send({user, text, timestamp: new Date()})
    }

    return (
        <div className='inputarea'>
            <form className='input' onSubmit={sendText}>
            <input type='text' name='text' id='text' placeholder='type here...' onChange={e => enterText(e.target.value)}/>
            </form>
        </div>
    )
}

export default Input