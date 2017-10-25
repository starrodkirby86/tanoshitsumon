import React from 'react';
import { Header } from 'semantic-ui-react';

const style = {
  color: 'white',
  fontSize: '64pt',
  fontFamily: 'Lato, Roboto, sans-serif',
};

const QuestionHeader = () => (
  <Header size="huge" content="Q:" style={style} />
);

export default QuestionHeader;
