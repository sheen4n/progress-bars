import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/common/button';

describe('Button ', () => {
  let component;
  let onActionMock = jest.fn();
  const props = { text: '12', onClick: onActionMock };

  // Arrange
  beforeEach(() => {
    component = shallow(<Button {...props} />);
    onActionMock.mockClear();
  });

  it('renders the button', () => {
    // console.log(component.debug());
    expect(component.find('button').exists()).toBe(true);
  });

  it('renders the props text', () => {
    expect(component.find('button').text()).toBe(props.text);
  });

  it('fires the function on click', () => {
    component.at(0).simulate('click');
    expect(onActionMock).toBeCalled();
  });
});
