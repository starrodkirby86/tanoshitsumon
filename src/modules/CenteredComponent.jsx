import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const style = {
  margin: 'auto',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  height: '100%',
};

const CenteredComponent = (props) => {
  const children = _.map(props.children, (child, index) => (
    <Grid.Row key={`${props.key}${index}`} style={{ maxWidth: 1920 }}>
      {child}
    </Grid.Row>
  ));
  return (
    <Grid style={style} textAlign="center" verticalAlign="middle">
      {[children]}
    </Grid>
  );
};

CenteredComponent.propTypes = {
  children: PropTypes.element.isRequired,
  key: PropTypes.string,
};

export default CenteredComponent;
