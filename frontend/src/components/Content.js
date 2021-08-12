import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TotalAmount from './TotalAmount'
import CumulativeTotalAmount from './CumulativeTotalAmount'
import ExpiredOrders from './ExpiredOrders'
import CumulativeExpiredOrders from './CumulativeExpiredOrders'

const Content = ({ contentData }) => {

  return (
    <div className='body'>
      <Switch>
        <Route path='/totalamount'>
          <TotalAmount totalOrders={contentData.totalOrders} />
          <CumulativeTotalAmount totalOrders={contentData.totalOrders} />
        </Route>
        <Route path='/expired'>
          <ExpiredOrders expiredOrders={contentData.expiredOrders} />
          <CumulativeExpiredOrders expiredOrders={contentData.expiredOrders} />
        </Route>
        <Route path='/'>
          <TotalAmount totalOrders={contentData.totalOrders} />
          <CumulativeTotalAmount totalOrders={contentData.totalOrders} />
          <ExpiredOrders expiredOrders={contentData.expiredOrders} />
          <CumulativeExpiredOrders expiredOrders={contentData.expiredOrders} />
        </Route>
      </Switch>
    </div>
  )
}

export default Content