// React.
import React from 'react';
import { render } from 'react-dom';

// Material UI theming.
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Root component.
import AppComponent from './components/App/index';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppComponent />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
