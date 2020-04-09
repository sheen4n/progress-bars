import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../components/common/progressBar';

describe('Progress Bar ', () => {
  let component;
  const props = {
    maximum: 100,
    value: 20,
    isSelected: false,
  };

  // Arrange
  beforeEach(() => {
    component = shallow(<ProgressBar {...props} />);
  });

  it('renders the progress', () => {
    expect(component.find('progress').exists()).toBe(true);
  });

  it('renders the correct text', () => {
    expect(component.find('p').text()).toBe('20.00% (20/100)');
  });
});

describe('Progress Bar ', () => {
  let component;

  it('to be blue if below limit', () => {
    const props = { maximum: 100, value: 20 };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('progress').hasClass('is-link')).toBe(true);
  });

  it('to be blue if above limit', () => {
    const props = { maximum: 100, value: 200 };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('progress').hasClass('is-danger')).toBe(true);
  });

  it('to have black text if below 50%', () => {
    const props = { maximum: 100, value: 20 };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('p').hasClass('has-text-black')).toBe(true);
  });

  it('to have white text if above 50%', () => {
    const props = { maximum: 100, value: 60 };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('p').hasClass('has-text-white')).toBe(true);
  });
});
