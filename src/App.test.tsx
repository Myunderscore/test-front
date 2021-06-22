import * as React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('renders the heading', () => {
  const result = shallow(<App />).contains(<h1>Your dashboard for energy </h1>)
  expect(result).toBeTruthy()
})
