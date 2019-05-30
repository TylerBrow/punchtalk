
import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

const ChatArea = (props) => {

    return (
        <div className='chatarea'>
           <ul className='chatbox'>
               {
                   props.messages.map((message, i) => (
                       <li key={'message' + i}>{message.user}: {message.text} || {moment(message.timestamp).fromNow()}</li>
                   ))
               }
           </ul>
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        messages: appState.messages
    }
}

export default connect(mapStateToProps)(ChatArea)