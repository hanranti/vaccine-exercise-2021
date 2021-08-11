import { Toolbar } from 'primereact/toolbar'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Topbar = () => {

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
      </Sidebar>
    </React.Fragment>
  )

  const right = (
    <React.Fragment>
      <Button label='All' onClick={() => { history.push('/') }}/>
      <Button label='OrdersAndVaccines' onClick={() => { history.push('/totalamount') }}/>
      <i>Created by hanranti</i>
    </React.Fragment>
  )

  return (
    <Toolbar left={left} right={right} style={style}></Toolbar>
  )
}

export default Topbar