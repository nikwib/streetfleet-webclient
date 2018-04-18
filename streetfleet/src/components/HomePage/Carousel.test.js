import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Carousel from './Carousel';

describe('Carousel', () => {
  let comp = mount(<Carousel />);
  it('render the components title', () => {
    expect(comp.find('h1').text()).toEqual('Track and manage your vehicles');
  });
  it('renders the right image', () => {
    expect(comp.find('img').exists()).toBe(true);
  });
});
