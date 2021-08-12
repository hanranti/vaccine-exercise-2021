import React from 'react'
import { Chart } from 'primereact/chart'
import convertArrayCumulative from '../utils/convertArrayCumulative'

const CumulativeTotalAmount = ({ totalOrders }) => {

  const data = {
    labels: totalOrders !== undefined && totalOrders.labels !== undefined ? [...totalOrders.labels] : [],
    datasets: [{
      label: 'Cumulative orders',
      data: totalOrders !== undefined && totalOrders.orderIds !== undefined ? [...totalOrders.orderIds.map(ids => ids.length)].map(convertArrayCumulative(0)) : [],
      borderColor: '#80ff80'
    },
    {
      label: 'Cumulative injections',
      data: totalOrders !== undefined && totalOrders.injections !== undefined ? [...totalOrders.injections].map(convertArrayCumulative(0)) : [],
      borderColor: '#80ffff'
    },
    {
      label: 'Cumulative used vaccines',
      data: totalOrders !== undefined && totalOrders.vaccinationDates !== undefined
        ? [...totalOrders.vaccinationDates.map(vaccinationDates => vaccinationDates.length)].map(convertArrayCumulative(0)) : [],
      borderColor: '#cc0099'
    },
    {
      label: 'Cumulative expired or expiring vaccines of total',
      data: totalOrders !== undefined && totalOrders.vaccinationDates !== undefined
        && totalOrders.orderIds !== undefined && totalOrders.injections !== undefined
        && totalOrders.vaccinationDates.length === totalOrders.labels.length
        ? [...totalOrders.orderIds.map(
          (ids => totalOrders.injections[totalOrders.orderIds.indexOf(ids)]
            - totalOrders.vaccinationDates[totalOrders.orderIds.indexOf(ids)].length))].map(convertArrayCumulative(0)) : [],
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

export default CumulativeTotalAmount