import React from 'react';
import * as PropTypes from 'prop-types';

const WrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: 'calc(768px + 16px * 2)',
  minHeight: '100%',
  padding: '0 16px',
};

const Wrapper = ({ children }) => (
  <div style={WrapperStyle}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.array,
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
