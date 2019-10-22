import React from "react";
import renderer from "react-test-renderer";

import {ArtistQuestionScreen} from "./artist-question-screen.jsx";

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{answers: [1, 2, 3]}}
      onAnswer={() => {}}
      screenIndex={0}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
