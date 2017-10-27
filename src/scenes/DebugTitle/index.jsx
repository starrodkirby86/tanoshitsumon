import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Button, Grid } from 'semantic-ui-react';
import CenteredComponent from '../../modules/CenteredComponent';
import { grantAccessTokenWithClientCredentials } from '../../lib/api/auth/actions/thunks';
import { genreList } from '../../lib/api/series/actions/thunks';

const mapStateToProps = (state) => {
  const { auth, series } = state;
  const { token } = auth || {};
  const { genres } = series || [];
  return {
    token,
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(grantAccessTokenWithClientCredentials()),
  onGenreClick: () => dispatch(genreList()),
});

const DebugTitle = (props) => {
  const {
    token, genres, onButtonClick, onGenreClick,
  } = props;
  const message = token ? token.accessToken : 'Can we get you your access token?';
  return (
    <Grid centered verticalAlign="middle">
      <Grid.Row style={{ width: '100%' }}>
        <Header as="h1" icon inverted>
          <Icon name="idea" />
          Access Token Fun
          <Header.Subheader>
            {message}
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Button icon="hand peace" labelPosition="left" content="Get token!" onClick={onButtonClick} />
        <Button icon="film" labelPosition="left" content="Get genres!" onClick={onGenreClick} />
      </Grid.Row>
      <Grid.Row>
        {genres}
      </Grid.Row>
    </Grid>
  );
};

DebugTitle.propTypes = {
  token: PropTypes.object,
  genres: PropTypes.array,
  onButtonClick: PropTypes.func,
  onGenreClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DebugTitle);
