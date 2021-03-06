import React from 'react';

import DatePicker from '../DatePicker/index.tsx';
import DatePickerJS from '../DatePickerJS/index';
import Wrapper from './Wrapper.tsx';
import Messages from './Messages';

const App = () => (
  <Wrapper>
    <h1>{Messages.title}</h1>
    <p>{Messages.description}</p>

    <DatePicker />
    <DatePickerJS />

    <hr />
    <p>{Messages.footer}</p>
  </Wrapper>
);

export default App;
