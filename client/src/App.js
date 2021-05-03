import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import { Game } from './components/Game'
class App extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <Router>
          <Route
            exact
            path='/'
            render={props => {return <Home  />
            }}
          />
          <Route
            exact
            path='/game'
            render={props => {return <Game  />
            }}
          />
        </Router>
      </div>
    )
  }
}

export default App