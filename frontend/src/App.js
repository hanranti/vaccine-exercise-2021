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
  const [vaccines, setVaccines] = useState([true, true, true])

  useEffect(() => {
    getAll(
      `totalamount?${vaccines[0] ? 'antiqua=true&&' : ''}${vaccines[1] ? 'solarbuddhica=true&&' : ''}${vaccines[2] ? 'zerpfy=true' : ''}`
    ).then(response => setTotalOrders(response))
  }, [vaccines])

  const topBarData = {
    vaccines: vaccines,
    setVaccines: setVaccines
  }

  const contentData = {
    totalOrders: totalOrders
  }

  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
        <Topbar topBarData={topBarData} />
        <Content contentData={contentData} />
      </BrowserRouter>
    </div>
  )
}

export default App
