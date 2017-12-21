import * as React from "react"
import { render } from "react-dom";
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from "./components/DatePicker/index";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <DatePicker />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root") as HTMLElement);