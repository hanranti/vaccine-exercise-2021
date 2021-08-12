import React from 'react'
import { Chart } from 'primereact/chart'
import convertArrayCumulative from '../utils/convertArrayCumulative'

const CumulativeExpiredOrders = ({ expiredOrders }) => {

  const data = {
    labels: expiredOrders !== undefined && expiredOrders.expirationDate !== undefined
      ? expiredOrders.expirationDate : [],
    datasets: [{
      label: 'Cumulative expired injections',
      data: expiredOrders !== undefined && expiredOrders.expired !== undefined
        ? [...expiredOrders.expired.map(convertArrayCumulative(0))] : [],
      backgroundColor: '#ff0000'
    }]
  }

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        gridLines: {
          color: '#0000cc',
        }
      }]
    }
  }

  const container = {
    backgroundColor: '#f2f2f2',
    marginBottom: '20px'
  }

  const card = {
    paddingTop: '10px',
    paddingBottom: '10px',
    marginLeft: '10px',
    marginRight: '10px'
  }

  return (
    <div className="p-col-12 p-lg-8">
      <div className="p-shadow-1" style={container}>
        <div className="card" style={card}>
          <Chart type='bar' data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default CumulativeExpiredOrders