import React from "react";
import renderer from "react-test-renderer";

import {Track} from "./track.jsx";

it(`Track correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Track
      value = {``}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
