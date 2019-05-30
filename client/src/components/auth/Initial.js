import React from 'react'
import {Link} from 'react-router-dom'



const Initial = (props) => {
    return (
        <div>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
        </div>
    )
}

export default Initial