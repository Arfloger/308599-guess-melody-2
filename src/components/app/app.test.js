import React from "react";
import renderer from "react-test-renderer";

import {App} from "./app.jsx";
import {settings} from '../../const';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      gameTime = {settings.gameTime}
      errorCount = {settings.errorCount}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
