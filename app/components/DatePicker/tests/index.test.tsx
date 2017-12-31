import { shallow } from "enzyme";
import * as React from "react";

import MuiDatePicker from "material-ui/DatePicker";
import DatePickerExampleSimple from "../index";

describe("Typescript DatePicker", () => {
  it("renders a mui DatePicker", () => {
    const renderedComponent = shallow(<DatePickerExampleSimple />);
    expect(renderedComponent.containsMatchingElement(<MuiDatePicker />)).toBeTruthy();
  });
});
