import React from 'react';
import { mount } from 'enzyme';

import ProgressBars from '../components/progressBars';

const mapBarsData = (bars) =>
  bars.map((bar, i) => {
    return { id: `${i}`, name: `Progress ${i + 1}`, value: bar };
  });

describe('ProgressBars ', () => {
  let component;
  let barsData = mapBarsData([20, 250, 49]);
  const props = {
    buttons: [10, 38, -13, -18],
    barsData,
    limit: 100,
  };

  beforeEach(() => {
    component = mount(<ProgressBars {...props} />);
  });

  afterEach(() => {
    // Cleanup
    component.unmount();
  });

  it('- props has 4 buttons - renders 4 buttons', () => {
    expect(component.find('button').length).toBe(4);
  });

  it('- with 3 progress bars - renders 3 options', () => {
    expect(component.find('option').length).toBe(3);
  });

  it('- with 3 progress bars - renders 3 progress bars', () => {
    expect(component.find('progress').length).toBe(3);
  });
});
