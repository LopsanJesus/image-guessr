import React from 'react';
import { shallow } from 'enzyme';
import Level from './Level';

describe('Level', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Level />);
    expect(wrapper).toMatchSnapshot();
  });
});
