import React from "react";
import renderer from "react-test-renderer";

import {Artist} from "./artist.jsx";

it(`Artist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Artist
      value={``}
      srcPath={``}
      title={``}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
