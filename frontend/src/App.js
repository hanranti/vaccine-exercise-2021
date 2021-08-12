import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primereact/resources/themes/saga-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import getAll from './services/dataService'
import Topbar from './components/Topbar'
import Content from './components/Content'

function App() {

  const [totalOrders, setTotalOrders] = useState({})
  const [expiredOrders, setExpiredOrders] = useState({})
  const [info, setInfo] = useState({})
  const [vaccines, setVaccines] = useState([true, true, true])
  const [genders, setGenders] = useState([true, true, true])
  const [beginVaccinations, setBeginVaccinations] = useState(false)
  const [endVaccinations, setEndVaccinations] = useState(false)
  const [beginOrders, setBeginOrders] = useState(false)
  const [endOrders, setEndOrders] = useState(false)
  const [expirationDate, setExpirationDate] = useState(false)

  const filterQuery = '?' +
    `${vaccines[0] ? 'antiqua=true&&' : ''}` +
    `${vaccines[1] ? 'solarbuddhica=true&&' : ''}` +
    `${vaccines[2] ? 'zerpfy=true&&' : ''}` +
    `${genders[0] ? 'male=true&&' : ''}` +
    `${genders[1] ? 'female=true&&' : ''}` +
    `${genders[2] ? 'nonbinary=true&&' : ''}` +
    `${beginVaccinations ? 'beginVaccinations=' + beginVaccinations + '&&' : ''}` +
    `${endVaccinations ? 'endVaccinations=' + endVaccinations + '&&' : ''}` +
    `${beginOrders ? 'beginOrders=' + beginOrders + '&&' : ''}` +
    `${endOrders ? 'endOrders=' + endOrders + '&&' : ''}` +
    `${expirationDate ? 'expirationdate=' + expirationDate + '&&' : ''}`

  useEffect(() => {
    getAll('totalamount' + filterQuery).then(response => setTotalOrders(response))
    getAll('expired' + filterQuery).then(response => {
      setExpiredOrders(response)
      console.log(response)
    })
    getAll('info').then(response => setInfo(response))
  }, [vaccines, genders, beginVaccinations, endVaccinations, beginOrders, endOrders, expirationDate])

  const topBarData = {
    vaccines: vaccines,
    setVaccines: setVaccines,
    genders: genders,
    setGenders: setGenders,
    beginVaccinations: beginVaccinations,
    endVaccinations: endVaccinations,
    beginOrders: beginOrders,
    endOrders: endOrders,
    setBeginVaccinations: setBeginVaccinations,
    setEndVaccinations: setEndVaccinations,
    setBeginOrders: setBeginOrders,
    setEndOrders: setEndOrders,
    expirationDate: expirationDate,
    setExpirationDate: setExpirationDate
  }

  const contentData = {
    totalOrders: totalOrders,
    expiredOrders: expiredOrders,
    info: info
  }

  return (
    <div className="App">
      <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
        <Topbar topBarData={topBarData} />
        <Content contentData={contentData} />
      </Router>
    </div>
  )
}

export default App
