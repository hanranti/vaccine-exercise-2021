import React from 'react'
import { render/**, fireEvent, waitFor*/ } from '@testing-library/react'
import Info from './Info'

describe('<Info />', () => {

  let component
  const data = {
    usedVaccinesSum: 5,
    expiredSum: 12
  }

  beforeEach(() => {
    component = render(<Info info={data} />)
  })

  test('renders header', () => {
    expect(component.container).toHaveTextContent('In total 5 vaccines have')
    expect(component.container).toHaveTextContent('and 12 have')
    expect(component.container).toHaveTextContent('Expired or expiring vaccines of total shows')
    expect(component.container).toHaveTextContent(' chart is for daily data and')
    expect(component.container).toHaveTextContent('data by the time')
  })
})