import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  it('renders a div', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.containsMatchingElement(<div />)).toBeTruthy();
  });

  it('renders children', () => {
    const renderedComponent = shallow(
      <Wrapper>
        [<p>Krakow is very far</p>]
      </Wrapper>
    );

    expect(renderedComponent
      .containsMatchingElement(<p>Krakow is very far</p>))
      .toBeTruthy();
  });
});
