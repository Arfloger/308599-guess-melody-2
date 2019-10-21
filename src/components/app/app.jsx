import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export default class App extends PureComponent {

  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameTime, errorCount} = props;

      return <WelcomeScreen
        time = {gameTime}
        errorCount = {errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    return <div>Test</div>

  }

  constructor(props) {
    super(props);
    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      gameTime, 
      errorCount,
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => ({
        ...prevState,
        question: prevState.question + 1,
      }));
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};
