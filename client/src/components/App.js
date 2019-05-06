import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../styles/main.css'
import ShowChat from './showchat'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path ='/' component={ShowChat} />
        </Router>
      </Provider>
    )
  }
}

export default App
