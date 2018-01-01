import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import DatePicker from '../../DatePicker/index.tsx';
import DatePickerJS from '../../DatePickerJS/index';

describe('App', () => {
  it('renders a DatePicker', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.containsMatchingElement(<DatePicker />)).toBeTruthy();
  });

  it('renders a DatePickerJS', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.containsMatchingElement(<DatePickerJS />)).toBeTruthy();
  });
});
