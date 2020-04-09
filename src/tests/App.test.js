import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import ProgressBars from '../components/progressBars';
import ErrorPage from '../components/errorPage';

describe('App with Valid Endpoints', () => {
  let app;
  // Arrange
  beforeEach(() => {
    global.endpointConfig = { buttons: [10, 38, -13, -18], bars: [20, 250, 49], limit: 100 };
    app = mount(<App />);
  });

  afterEach(() => {
    // Cleanup
    global.endpointConfig = null;
    app.unmount();
  });

  it('renders the progressBars', () => {
    // console.log(app.debug());
    expect(app.find(ProgressBars).length).toEqual(1);
  });
});

describe('App with Invalid Endpoints', () => {
  let app;

  it('- with null - endpoints renders the errorsPage', () => {
    global.endpointConfig = null;
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- no buttons - renders the errorsPage', () => {
    global.endpointConfig = { bars: [20, 250, 49], limit: 100 };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- invalid buttons - renders the errorsPage', () => {
    global.endpointConfig = { buttons: ['a', 38, -13, -18], bars: [20, 250, 49], limit: 100 };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- no bars - renders the errorsPage', () => {
    global.endpointConfig = { buttons: [5, 38, -13, -18], limit: 100 };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- invalid bars - renders the errorsPage', () => {
    global.endpointConfig = { buttons: [5, 38, -13, -18], bars: [[123], 250, 49], limit: 100 };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- no limit - renders the errorsPage', () => {
    global.endpointConfig = { buttons: [5, 38, -13, -18], bars: [[123], 250, 49] };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- negative limit - renders the errorsPage', () => {
    global.endpointConfig = { buttons: [5, 38, -13, -18], bars: [[123], 250, 49], limit: -5 };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  it('- invalid limit - renders the errorsPage', () => {
    global.endpointConfig = { buttons: [5, 38, -13, -18], bars: [[123], 250, 49], limit: 'hello' };
    app = mount(<App />);
    // console.log(app.debug());
    expect(app.find(ErrorPage).length).toEqual(1);
  });

  afterEach(() => {
    // Cleanup
    global.endpointConfig = null;
  });
});
