import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import React from "react";
import SelectCountry from "../SelectCountry";
import renderer from "react-test-renderer";
import Community from "../Community";

it("matches the snapshot of Select Country", () =>{
  const tree = renderer
    .create(
      <SelectCountry/>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SelectCountry/>, div)
})
