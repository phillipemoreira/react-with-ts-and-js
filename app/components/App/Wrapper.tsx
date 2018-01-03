
import * as React from 'react';

const WrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: 'calc(768px + 16px * 2)',
  minHeight: '100%',
  padding: '0 16px',
};

const Wrapper = (props: React.Props<object>) => (
  <div style={WrapperStyle}>
    {props.children}
  </div>
);

export default Wrapper;
