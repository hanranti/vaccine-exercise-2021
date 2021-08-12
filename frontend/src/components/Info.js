import React from 'react'

const Info = ({ info }) => {

  return <div>
    <h1>Some additional info</h1>
    <p>In total {info.usedVaccinesSum} vaccines have been used and {info.expiredSum} have expired.</p>
    <p>This web-page can be used to filter data about vaccinations and orders for different vaccines.
      In the upper left Filters section can be opened for sorting the data. In the upper right
      there are buttons for different data to be displayed.
    </p>

    <h3>Orders and Injections</h3>
    <p>This page shows data about orders that have been made for each day. There are 2 charts,
      one for daily data and the other for the same data but in cumulative form. Total orders shows
      how many orders have arrived and Total injections the same value multiplied by injections
      contained in the order. Used vaccines of total shows how many of that days arrived injections
      have been used. Expired or expiring vaccines of total shows how many of that days arrived vaccines
      have never been used. If the day is past 30 days from now the vaccines have expired and otherwise
      they are expiring by not being used.
    </p>

    <h3>Expired Orders</h3>
    <p>This page shows expiration dates and unused injections in bar form for each day. As the previous
      page the first chart is for daily data and the other for same data in cumulative form
    </p>

    <h3>Filters</h3>
    <p>The filtering sidebar consists of switches and date selectors. The switches switch on a particular
      vaccine type being used or gender of the vaccination patients.
    </p>
    <p>All date inputs contain a switch for turning of the date. When the date is off data time is not limited
      in the direction that the date input points to(begin, end). Begin limits the time to not be before given
      date and end limits it to not be after given date.
    </p>
    <p>If either of the vaccination date inputs are turned on the order data in Orders and Injections
      is limited to orders which have been used at least once during the time period. The orders arrived
      dates filter the data by the time in which the orders must have been arrived.
    </p>
    <p>The Expired Orders page has a separate filter in the bottom of Filters sidebar. Filter by expiration
      date filters the data by the expiration date. It filters the data from the end. Expired Orders page is
      not affected by the other time based filters.
    </p>
  </div>
}

export default Info