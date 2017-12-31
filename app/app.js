import React from 'react';
import { render } from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import DatePicker from './components/DatePicker/index.tsx';
import DatePickerJS from './components/DatePickerJS/index';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <DatePicker />
    <DatePickerJS />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
