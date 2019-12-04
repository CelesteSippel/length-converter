import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Length Converter</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
