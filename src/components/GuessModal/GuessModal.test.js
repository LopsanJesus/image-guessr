import React from 'react';
import { shallow } from 'enzyme';
import GuessModal from './GuessModal';

describe('GuessModal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GuessModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
