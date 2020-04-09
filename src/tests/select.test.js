import React from 'react';
import { shallow } from 'enzyme';
import Select from '../components/common/select';

describe('Select ', () => {
  let component;
  let onActionMock = jest.fn();
  const props = {
    dataSet: [
      { id: 10, name: 'Cool' },
      { id: 20, name: 'Angry' },
      { id: 30, name: 'Happy' },
    ],
    onChange: onActionMock,
    value: 10,
  };

  // Arrange
  beforeEach(() => {
    component = shallow(<Select {...props} />);
    onActionMock.mockClear();
  });

  it('renders the select', () => {
    expect(component.find('select').exists()).toBe(true);
  });

  it('- with 3 options - renders 3 options', () => {
    expect(component.find('option').length).toBe(3);
  });

  it('will fire onChange handler when changed', () => {
    component.find('select').at(0).simulate('change');
    expect(onActionMock).toBeCalled();
  });
});
