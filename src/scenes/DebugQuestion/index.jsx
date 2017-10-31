import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CenteredComponent from '../../modules/CenteredComponent';
import DebugForm from './components/DebugForm';
import Question from '../../modules/Question/index';
import { browse } from '../../lib/api/series/actions/thunks';
import { grantAccessTokenWithClientCredentials } from '../../lib/api/auth/actions/thunks';

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
  const {
    auth: { token: { accessToken } },
    series: { series },
  } = state;
  return {
    accessToken,
    series,
  };
};

const mapDispatchToProps = dispatch => ({
  onGrantAccessTokenClick: () => dispatch(grantAccessTokenWithClientCredentials()),
  onGetSeriesClick: () => dispatch(browse({
    sort: 'popularity-desc',
  })),
  onGenerateQuestionsClick: () => dispatch(),
});

const DebugQuestion = (props) => {
  const {
    accessToken,
    series,
    onGetSeriesClick,
    onGrantAccessTokenClick,
    onGenerateQuestionsClick,
  } = props;
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
            <Button fluid color="teal" onClick={onGrantAccessTokenClick}>
              Grant Access Token
            </Button>
            <Divider />
            <Button disabled={_.isNull(accessToken)} fluid color="blue" onClick={onGetSeriesClick}>
              Get Series
            </Button>
            <Divider />
            <Button disabled={_.isNull(series)} fluid color="green" onClick={onGenerateQuestionsClick}>
              Generate a new question
            </Button>
            <Divider />
            <DebugForm disabled={_.isNull(series)} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

DebugQuestion.propTypes = {
  accessToken: PropTypes.string,
  series: PropTypes.object,
  onGrantAccessTokenClick: PropTypes.func,
  onGetSeriesClick: PropTypes.func,
  onGenerateQuestionsClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DebugQuestion);
