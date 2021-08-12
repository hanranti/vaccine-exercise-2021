import React from 'react'
import { render/**, fireEvent, waitFor*/ } from '@testing-library/react'
import App from './App'

describe('<App />', () => {

  let component

  beforeEach(() => {
    component = render(<App />)
  })

  test('renders header', () => {
    expect(component.container).toHaveTextContent('Vaccine Exercise 2021')
    expect(component.container).toHaveTextContent('Filters')
    expect(component.container).toHaveTextContent('All')
    expect(component.container).toHaveTextContent('OrdersAndInjections')
    expect(component.container).toHaveTextContent('ExpiredOrders')
    expect(component.container).toHaveTextContent('Info')
    expect(component.container).toHaveTextContent('Created by hanranti')
  })
})