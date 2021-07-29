import { Toolbar } from 'primereact/toolbar'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import React, { useState } from 'react'

const Topbar = () => {
    const [showFilters, setShowFilters] = useState(false)

    const style = {
        backgroundColor: '#ff9b00'
    }

    const left = (
        <div>
            <h1>Hello </h1>
            <Button label='Filters' onClick={() => setShowFilters(true)} />
            <Sidebar position='left' className="ui-sidebar-sm" visible={showFilters} onHide={() => setShowFilters(false)} />
        </div>
    )

    const right = (
        <div position='right'>
            <h1>world!</h1>
        </div>
    )

    return (
        <Toolbar left={left} right={right} style={style}></Toolbar>
    )
}

export default Topbar