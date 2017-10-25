import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { COLORS_POPPY } from '../../../../../res/style/colors';

const MultipleChoice = (props) => {
  const { answers } = props;
  const answerComponents = _.map(answers, answer => (
    <Button
      key={`answer${answer}`}
      size="huge"
      color={COLORS_POPPY[_.random(0, COLORS_POPPY.length - 1)]}
      content={answer}
    />
  ));
  return (
    <div>
      {answerComponents}
    </div>
  );
};

MultipleChoice.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultipleChoice;
