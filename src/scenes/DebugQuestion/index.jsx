import React from 'react';
import { Segment, Grid, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CenteredComponent from '../../modules/CenteredComponent';
import DebugForm from './components/DebugForm';

const style = {
  margin: 'auto',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  height: '100%',
};

const DebugQuestion = (props) => {
  return (
    <Grid style={style} textAlign="center" verticalAlign="middle">
      <Grid.Row style={{ maxWidth: 1920 }}>
        <Grid.Column width={8} style={{ width: '100%' }}>
          sss
        </Grid.Column>
        <Grid.Column width={3} style={{ width: '100%' }}>
          <Segment clearing attached="top" inverted color="blue">
            Debug Menu Choices
          </Segment>
          <Segment attached="bottom" style={{ color: 'black' }}>
            <Button fluid color="green">
              Generate a new question
            </Button>
            <Divider />
            <DebugForm />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

DebugQuestion.propTypes = {

};

export default DebugQuestion;