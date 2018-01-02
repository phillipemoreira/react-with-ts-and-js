import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import DatePicker from '../../DatePicker/index.tsx';
import DatePickerJS from '../../DatePickerJS/index';
import Messages from '../Messages';

describe('App', () => {
  let renderedComponent;

  beforeAll(() => {
    renderedComponent = shallow(<App />);
  });

  it('renders an <h1 /> with the proper tittle', () => {
    expect(renderedComponent.containsMatchingElement(<h1>{Messages.title}</h1>)).toBeTruthy();
  });

  it('renders an <p/> element with the proper description', () => {
    expect(renderedComponent.containsMatchingElement(<p>{Messages.description}</p>)).toBeTruthy();
  });

  it('renders a DatePicker', () => {
    expect(renderedComponent.containsMatchingElement(<DatePicker />)).toBeTruthy();
  });

  it('renders a DatePickerJS', () => {
    expect(renderedComponent.containsMatchingElement(<DatePickerJS />)).toBeTruthy();
  });

  it('renders an <p/> element with the footer', () => {
    expect(renderedComponent.containsMatchingElement(<p>{Messages.description}</p>)).toBeTruthy();
  });
});
