import React from 'react';
import PropTypes from 'prop-types';

const CenteredComponent = props => (
  <div
    style={{
    margin: 'auto',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    height: '100%',
  }}
  >
    {props.children}
  </div>
);

CenteredComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CenteredComponent;
