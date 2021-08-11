import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'primereact/resources/themes/saga-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import getAll from './services/dataService'
import Topbar from './components/Topbar'
import Content from './components/Content'

function App() {

  const [totalOrders, setTotalOrders] = useState({})

  useEffect(() => {
    getAll('totalamount?antiqua=true').then(response => setTotalOrders(response))
  }, [])

  const contentData = {
    totalOrders: totalOrders
  }

  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
        <Topbar />
        <Content contentData={contentData} />
      </BrowserRouter>
    </div>
  )
}

export default App
