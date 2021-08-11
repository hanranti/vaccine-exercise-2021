import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TotalAmount from './TotalAmount'
import CumulativeTotalAmount from './CumulativeTotalAmount'

const Content = ({ contentData }) => {

  return (
    <div className='body'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <TotalAmount totalOrders={contentData.totalOrders} />
            <CumulativeTotalAmount totalOrders={contentData.totalOrders} />
          </Route>
          <Route path='/totalamount'>
            <TotalAmount totalOrders={contentData.totalOrders} />
            <CumulativeTotalAmount totalOrders={contentData.totalOrders} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Content