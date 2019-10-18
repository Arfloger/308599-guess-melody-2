import React from "react";
import renderer from "react-test-renderer";

import {WelcomeScreen} from "./welcome-screen.jsx";
import {settings} from '../../const';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time = {settings.gameTime}
      errorCount = {settings.errorCount}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
