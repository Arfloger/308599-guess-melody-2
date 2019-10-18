import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WelcomeScreen} from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`WelcomeScreen is correctly`, () => {
  const preventDefault = jest.fn();
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    time = {0}
    errorCount = {0}
    onClick = {clickHandler}
  />);

  const startButton = welcomeScreen.find(`button`);
  startButton.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});
