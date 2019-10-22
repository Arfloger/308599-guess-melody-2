import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GenreQuestionScreen} from "./genre-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen is correctly`, () => {
  const preventDefault = jest.fn();
  const clickHandler = jest.fn();
  const genreQuestionScreen = shallow(<GenreQuestionScreen
    question={{answers: []}}
    screenIndex={0}
    onAnswer={clickHandler}
  />);

  const formElement = genreQuestionScreen.find(`.game__tracks`);
  formElement.simulate(`submit`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});
