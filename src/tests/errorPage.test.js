import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from '../components/errorPage';

describe('ErrorPage', () => {
  let component;
  // Arrange
  beforeEach(() => {
    component = shallow(<ErrorPage />);
  });

  it('renders the correct title', () => {
    expect(component.find('h1').text()).toEqual('Uh-oh!! So sorry you are seeing this page.');
  });
});
