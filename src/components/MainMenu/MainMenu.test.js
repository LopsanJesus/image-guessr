import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './MainMenu';

describe('MainMenu', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
