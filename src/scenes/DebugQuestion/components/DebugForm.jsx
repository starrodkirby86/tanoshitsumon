import React from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

const choices = [
  {
    text: 'Genres',
    value: 'genre',
  },
  {
    text: 'Popularity Rank',
    value: 'popularity',
  },
  {
    text: "Who's That?",
    value: 'character',
  },
  {
    text: 'Rating Rank',
    value: 'rating',
  },
  {
    text: 'Date Ranking',
    value: 'date',
  },
];

class DebugForm extends React.Component {

  propTypes = {
    disabled: PropTypes.bool,
  };

  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const { disabled } = this.props;
    return (
      <Form>
        <Form.Field disabled={disabled}>
          <Form.Group inline>
            <label>Difficulty</label>
            <Form.Radio label="Easy" value="easy" checked={value === 'easy'} onChange={this.handleChange} />
            <Form.Radio label="Medium" value="medium" checked={value === 'medium'} onChange={this.handleChange} />
            <Form.Radio label="Hard" value="hard" checked={value === 'hard'} onChange={this.handleChange} />
          </Form.Group>
        </Form.Field>
        <Dropdown disabled={disabled} placeholder="Select Question Type..." fluid selection options={choices} />
      </Form>
    );
  }
}

export default DebugForm;
