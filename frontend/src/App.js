import React from 'react'
import 'primereact/resources/themes/saga-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Topbar from './components/Topbar'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Content />
    </div>
  )
}

export default App
