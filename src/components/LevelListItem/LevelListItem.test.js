import React from 'react';
import { shallow } from 'enzyme';
import LevelListItem from './LevelListItem';

describe('LevelListItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LevelListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
