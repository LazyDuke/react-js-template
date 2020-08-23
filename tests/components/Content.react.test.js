import Content from '../../src/components/Content'
import React from 'react'
import { shallow } from 'enzyme'

test('Cotent text', () => {
  const component = shallow(<Content />)

  expect(component).toMatchSnapshot()
})
