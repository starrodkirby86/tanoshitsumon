import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CenteredComponent from '../../modules/CenteredComponent';
import DebugForm from './components/DebugForm';
import Question from '../../modules/Question/index';
import { browse } from '../../lib/api/series/actions/thunks';

const style = {
  margin: 'auto',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  height: '100%',
};

const mapStateToProps = (state) => {
  const { auth: { token: { accessToken } } } = state;
  return {
    accessToken,
  };
};

const mapDispatchToProps = dispatch => ({
  onGetSeriesClick: () => dispatch(browse()),
});

const DebugQuestion = (props) => {
  const { accessToken, onGetSeriesClick } = props;
  return (
    <Grid style={style} textAlign="center" verticalAlign="middle">
      <Grid.Row style={{ maxWidth: 1920 }}>
        <Grid.Column width={10} style={{ width: '100%' }}>
          <Question />
        </Grid.Column>
        <Grid.Column width={3} style={{ width: '100%' }}>
          <Segment clearing attached="top" inverted color="blue">
            Debug Menu Choices
          </Segment>
          <Segment attached="bottom" style={{ color: 'black' }}>
            <span>{accessToken}</span>
            <Button fluid color="blue" onClick={onGetSeriesClick}>
              Get Series
            </Button>
            <Divider />
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
  accessToken: PropTypes.string,
  onGetSeriesClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DebugQuestion);
