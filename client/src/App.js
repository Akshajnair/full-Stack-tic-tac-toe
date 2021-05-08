import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import './components/assets/Home.css'
import { Game } from './components/Game'
class App extends Component {

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
            path='/game/:id'
            render={props => {return <Game  />
            }}
          />
        </Router>
      </div>
    )
  }
}

export default App