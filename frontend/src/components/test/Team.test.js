import ReactDOM from 'react-dom'
import React from "react";
import Team from "../Team";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";


test("matches the snapshot of CreateTournament", () =>{
  const tree = renderer
    .create(
      <div>
        <Team/>
      </div>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})

test("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Team/>, div)
})
