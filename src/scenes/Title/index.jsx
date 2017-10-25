import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Button, Grid } from 'semantic-ui-react';
import CenteredComponent from '../../modules/CenteredComponent';
import { grantAccessTokenWithClientCredentials } from '../../lib/api/actions/index';

const mapStateToProps = (state) => {
  const { auth } = state;
  const { token } = auth || { };
  return {
    token,
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(grantAccessTokenWithClientCredentials()),
});

const Title = (props) => {
  const { token, onButtonClick } = props;
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
      </Grid.Row>
    </Grid>
  );
};

Title.propTypes = {
  token: PropTypes.object,
  onButtonClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
