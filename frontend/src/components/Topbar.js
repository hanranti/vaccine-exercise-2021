import { Toolbar } from 'primereact/toolbar'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { InputSwitch } from 'primereact/inputswitch'

const Topbar = ({ topBarData }) => {

  const [showFilters, setShowFilters] = useState(false)

  let history = useHistory()

  const style = {
    backgroundColor: '#ff9b00'
  }

  const left = (
    <React.Fragment>
      <h1>Vaccine Exercise 2021</h1>
      <Button label='Filters' onClick={() => setShowFilters(true)} />
      <Sidebar position='left' className="ui-sidebar-sm" visible={showFilters} onHide={() => setShowFilters(false)}>
        <h4>Filter by vaccine:</h4>
        <h6>Antiqua</h6>
        <InputSwitch checked={topBarData.vaccines[0]} onChange={() => {
          topBarData.setVaccines([
            !topBarData.vaccines[0],
            topBarData.vaccines[1],
            topBarData.vaccines[2]
          ])
        }} />
        <h6>SolarBuddhica</h6>
        <InputSwitch checked={topBarData.vaccines[1]} onChange={() => {
          topBarData.setVaccines([
            topBarData.vaccines[0],
            !topBarData.vaccines[1],
            topBarData.vaccines[2]
          ])
        }} />
        <h6>Zerpfy</h6>
        <InputSwitch checked={topBarData.vaccines[2]} onChange={() =>
          topBarData.setVaccines([
            topBarData.vaccines[0],
            topBarData.vaccines[1],
            !topBarData.vaccines[2]
          ])
        } />
        <h4>Time based filtering</h4>
        <h6>Vaccination date:</h6>
        <p>begin</p>
        <input
          className="p-inputtext p-component"
          type="date"
          value={topBarData.beginVaccinations}
          onChange={e => topBarData.setBeginVaccinations(e.target.value)}></input>
        <InputSwitch
          checked={topBarData.beginVaccinations}
          onChange={() => topBarData.setBeginVaccinations(false)} />
        <p>end</p>
        <input
          className="p-inputtext p-component"
          type="date"
          value={topBarData.endVaccinations}
          onChange={e => topBarData.setEndVaccinations(e.target.value)}></input>
        <InputSwitch
          checked={topBarData.endVaccinations}
          onChange={() => topBarData.setEndVaccinations(false)} />
        <h6>Orders arrived date:</h6>
        <p>begin</p>
        <input
          className="p-inputtext p-component"
          type="date"
          value={topBarData.beginOrders}
          onChange={e => topBarData.setBeginOrders(e.target.value)}></input>
        <InputSwitch
          checked={topBarData.beginOrders}
          onChange={() => topBarData.setBeginOrders(false)} />
        <p>end</p>
        <input
          className="p-inputtext p-component"
          type="date"
          value={topBarData.endOrders}
          onChange={e => topBarData.setEndOrders(e.target.value)}></input>
        <InputSwitch
          checked={topBarData.endOrders}
          onChange={() => topBarData.setEndOrders(false)} />
        <h4>Filter by gender:</h4>
        <h6>male</h6>
        <InputSwitch checked={topBarData.genders[0]} onChange={() => {
          topBarData.setGenders([
            !topBarData.genders[0],
            topBarData.genders[1],
            topBarData.genders[2]
          ])
        }} />
        <h6>female</h6>
        <InputSwitch checked={topBarData.genders[1]} onChange={() => {
          topBarData.setGenders([
            topBarData.genders[0],
            !topBarData.genders[1],
            topBarData.genders[2]
          ])
        }} />
        <h6>nonbinary</h6>
        <InputSwitch checked={topBarData.genders[2]} onChange={() => {
          topBarData.setGenders([
            topBarData.genders[0],
            topBarData.genders[1],
            !topBarData.genders[2]
          ])
        }} />
      </Sidebar>
    </React.Fragment>
  )

  const right = (
    <React.Fragment>
      <Button label='All' onClick={() => { history.push('/') }} />
      <Button label='OrdersAndInjections' onClick={() => { history.push('/totalamount') }} />
      <i>Created by hanranti</i>
    </React.Fragment>
  )

  return (
    <Toolbar left={left} right={right} style={style}></Toolbar>
  )
}

export default Topbar