import React from 'react';
import { Grid } from 'semantic-ui-react';
import CenteredComponent from '../modules/CenteredComponent';
import Question from '../modules/Question';

const style = {
  margin: 'auto',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  height: '100%',
};

const QuestionScene = () => (
  <Grid style={style}>
    <Question />
  </Grid>
);

export default QuestionScene;
