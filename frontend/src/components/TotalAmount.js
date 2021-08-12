import React from 'react'
import { Chart } from 'primereact/chart'

const TotalAmount = ({ totalOrders }) => {

  const data = {
    labels: totalOrders !== undefined && totalOrders.labels !== undefined
      ? totalOrders.labels : [],
    datasets: [{
      label: 'Total orders',
      data: totalOrders !== undefined && totalOrders.orderIds !== undefined
        ? [...totalOrders.orderIds.map(ids => ids.length)] : [],
      borderColor: '#80ff80'
    },
    {
      label: 'Total injections',
      data: totalOrders !== undefined && totalOrders.injections !== undefined
        ? [...totalOrders.injections] : [],
      borderColor: '#80ffff'
    },
    {
      label: 'Used vaccines of total',
      data: totalOrders !== undefined && totalOrders.vaccinationDates !== undefined
        ? [...totalOrders.vaccinationDates.map(vaccinationDates => vaccinationDates.length)] : [],
      borderColor: '#cc0099'
    },
    {
      label: 'Expired or expiring vaccines of total',
      data: totalOrders !== undefined && totalOrders.vaccinationDates !== undefined
        && totalOrders.orderIds !== undefined && totalOrders.injections !== undefined
        && totalOrders.vaccinationDates.length === totalOrders.labels.length
        ? [...totalOrders.orderIds.map(
          ids => totalOrders.injections[totalOrders.orderIds.indexOf(ids)]
            - totalOrders.vaccinationDates[totalOrders.orderIds.indexOf(ids)].length)] : [],
      borderColor: '#ff0000'
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

export default TotalAmount