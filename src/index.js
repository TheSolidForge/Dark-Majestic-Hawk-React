import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import TheSolidForge from './views/the-solid-forge'
import Landing from './views/landing'
import ContactAndAbout from './views/contact-and-about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={TheSolidForge} exact path="/" />
        <Route component={Landing} exact path="/landing" />
        <Route component={ContactAndAbout} exact path="/contact-and-about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
