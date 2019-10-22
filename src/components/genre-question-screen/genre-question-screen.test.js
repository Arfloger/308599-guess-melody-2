import React from "react";
import renderer from "react-test-renderer";

import {GenreQuestionScreen} from "./genre-question-screen.jsx";

it(`GenreQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={{answers: [1, 2, 3]}}
      onAnswer={() => {}}
      screenIndex={0}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
