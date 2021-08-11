import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TotalAmount from './TotalAmount'

const Content = ({ contentData }) => {

  return (
    <div className='body'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <TotalAmount totalOrders={contentData.totalOrders} />
          </Route>
          <Route path='/totalamount'>
            <TotalAmount totalOrders={contentData.totalOrders} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Content