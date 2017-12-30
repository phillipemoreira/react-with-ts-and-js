import * as React from "react";
import { shallow } from "enzyme";

import MuiDatePicker from 'material-ui/DatePicker';
import DatePickerExampleSimple from "../index";

it("renders a mui DatePicker", () => {
    const renderedComponent = shallow(<DatePickerExampleSimple />);
    expect(renderedComponent.containsMatchingElement(<MuiDatePicker />)).toBeTruthy();
});