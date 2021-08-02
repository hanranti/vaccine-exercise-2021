import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Content = () => {

  return (
    <div className='body'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <h1>Content</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Content