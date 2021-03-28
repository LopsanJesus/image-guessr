import React from 'react';
import { shallow } from 'enzyme';
import AlertModal from './AlertModal';

describe('AlertModal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AlertModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
