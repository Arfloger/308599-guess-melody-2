import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ArtistQuestionScreen} from "./artist-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionScreen is correctly`, () => {
  const clickHandler = jest.fn();
  const artistQuestionScreen = shallow(<ArtistQuestionScreen
    question={{answers: []}}
    screenIndex={0}
    onAnswer={clickHandler}
  />);

  const formElement = artistQuestionScreen.find(`.game__artist`);
  formElement.simulate(`change`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
