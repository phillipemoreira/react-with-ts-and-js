
import * as React from 'react';

// type FlexDirection = 'column';

const WrapperStyle = {
  display: 'flex',
  // flexDirection: 'column' as FlexDirection,
  margin: '0 auto',
  maxWidth: 'calc(768px + 16px * 2)',
  minHeight: '100%',
  padding: '0 16px',
};

interface IProps {
  children: object | object[];
}

const Wrapper = (props: IProps) => (
  <div style={WrapperStyle}>
    {props.children}
  </div>
);

export default Wrapper;
