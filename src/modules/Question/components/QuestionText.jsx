import React from 'react';
import PropTypes from 'prop-types';

const style = {
  fontSize: '16pt',
  textAlign: 'left',
  lineHeight: '1.5',
};

const QuestionText = (props) => {
  const { content } = props;
  return (
    <div style={style}>
      {content}
    </div>
  );
};

QuestionText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default QuestionText;
