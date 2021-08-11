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
  const [beginVaccinations, setBeginVaccinations] = useState(false)
  const [endVaccinations, setEndVaccinations] = useState(false)
  const [beginOrders, setBeginOrders] = useState(false)
  const [endOrders, setEndOrders] = useState(false)

  const filterQuery = `${vaccines[0] ? 'antiqua=true&&' : ''}` +
    `${vaccines[1] ? 'solarbuddhica=true&&' : ''}` +
    `${vaccines[2] ? 'zerpfy=true&&' : ''}` +
    `${beginVaccinations ? 'beginVaccinations=' + beginVaccinations + '&&' : ''}` +
    `${endVaccinations ? 'endVaccinations=' + endVaccinations + '&&' : ''}` +
    `${beginOrders ? 'beginOrders=' + beginOrders + '&&' : ''}` +
    `${endOrders ? 'endOrders=' + endOrders + '&&' : ''}`

  useEffect(() => {
    getAll('totalamount?' + filterQuery).then(response => setTotalOrders(response))
  }, [vaccines, beginVaccinations, endVaccinations, beginOrders, endOrders])

  const topBarData = {
    vaccines: vaccines,
    setVaccines: setVaccines,
    beginVaccinations: beginVaccinations,
    endVaccinations: endVaccinations,
    beginOrders: beginOrders,
    endOrders: endOrders,
    setBeginVaccinations: setBeginVaccinations,
    setEndVaccinations: setEndVaccinations,
    setBeginOrders: setBeginOrders,
    setEndOrders: setEndOrders
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
