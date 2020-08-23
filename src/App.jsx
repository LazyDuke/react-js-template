import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import React from 'react'
import TodoList from './pages/TodoList'
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <TodoList path="/todo" />
        </Route>
      </Switch>
    </>
  )
}

export default hot(App)
