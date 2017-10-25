import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import QuestionHeader from './components/QuestionHeader';
import QuestionText from './components/QuestionText';
import MultipleChoice from './components/Answer/components/MultipleChoice';
import { getAccessTokenWithClientCredentials } from '../../lib/api/anilist';

const loremIpsum = 'Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet,';

const sampleAnswers = [
  'Rock Lobster',
  'The Rude Dude With The Attitude',
  'Beethoven Had How Many Symphonies?',
  'This Answer Is Valid',
];

const Question = (props) => {
  // const {} = props;
  console.log(getAccessTokenWithClientCredentials());
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
    >
      <Grid.Row>
        <Grid.Column width={2} style={{ maxWidth: 450 }}>
          <QuestionHeader />
        </Grid.Column>
        <Grid.Column width={14} style={{ maxWidth: 900 }}>
          <QuestionText content={loremIpsum + loremIpsum} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <MultipleChoice answers={sampleAnswers} />
      </Grid.Row>
    </Grid>
  );
};

export default Question;
