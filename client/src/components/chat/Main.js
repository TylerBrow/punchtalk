import React, { useEffect, useContext } from "react"
// import { connect } from "../../actions/chat"
import ChannelList from "./ChannelList"
import ChatArea from "./ChatArea"
import UserList from "./UserList"
import { AuthContext } from "../../lib/auth"
import Input from './Input'

const Main = props => {
  const { user } = useContext(AuthContext)

//   useEffect(() => {
//     connect(user)
//   }, [user])

  return (
    <div className="room">
      <ChannelList />
      <div className='chat-input'>
        <ChatArea />
        <Input />
      </div>
      <UserList />
    </div>
  )
}

export default Main



































// import React, {useState} from 'react'
// import {connect} from 'react-redux'
// import { send } from '../actions/actions';

// const ShowChat = (props) => {

//     const [text, enterText] = useState('')
    

//     function sendText(e) {
//         e.preventDefault()

//         send(text)
//     }

//     return (
//         <div>
//            <ul className='chatbox'>
//                {
//                    props.messages.map((message, i) => (
//                        <li key={'message' + i}>{message}</li>
//                    ))

//                }
//            </ul>
//            <form onSubmit={sendText}>
//                <input type='text' name='text' id='text' placeholder='type here...' onChange={e => enterText(e.target.value)}/>
//                <button type='submit'>Submit</button>
//            </form>
//         </div>
//     )
// }

// function mapStateToProps(appState) {
//     return {
//         messages: appState.messages
//     }
// }

// export default connect(mapStateToProps)(ShowChat)