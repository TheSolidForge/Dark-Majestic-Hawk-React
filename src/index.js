import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Projects from './views/projects'
import TheSolidForge from './views/the-solid-forge'
import Services from './views/services'
import Account from './views/account'
import ProfileAndResume from './views/profile-and-resume'
import Articles from './views/articles'
import ContactAndAbout from './views/contact-and-about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Projects} exact path="/projects" />
        <Route component={TheSolidForge} exact path="/" />
        <Route component={Services} exact path="/services" />
        <Route component={Account} exact path="/account" />
        <Route component={ProfileAndResume} exact path="/profile-and-resume" />
        <Route component={Articles} exact path="/articles" />
        <Route component={ContactAndAbout} exact path="/contact-and-about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
