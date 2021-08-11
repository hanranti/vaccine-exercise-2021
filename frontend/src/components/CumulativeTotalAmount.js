import React from 'react'
import { Chart } from 'primereact/chart'

const CumulativeTotalAmount = ({ totalOrders }) => {

  const convertArrayCumulative = (s => v => s += v)(0)

  const data = {
    labels: totalOrders !== undefined && totalOrders.labels !== undefined ? totalOrders.labels : [],
    datasets: [{
      label: 'Cumulative orders',
      data: totalOrders !== undefined && totalOrders.orders !== undefined ? [...totalOrders.orders].map(convertArrayCumulative) : [],
      borderColor: '#80ff80'
    },
    {
      label: 'Cumulative injections',
      data: totalOrders !== undefined && totalOrders.injections !== undefined ? [...totalOrders.injections].map(convertArrayCumulative) : [],
      borderColor: '#80ffff'
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
          <Chart type='line' data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default CumulativeTotalAmount