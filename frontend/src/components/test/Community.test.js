import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Community from "../Community";
import renderer from "react-test-renderer";

/**
 * Didn't test much here, because we didn't make the connection to API yet
 */

test("renders without crashing", () =>{
   const div = document.createElement("div")
   ReactDOM.render(<Community/>, div)
})

test("matches the snapshot of Community", () =>{
  const tree = renderer
    .create(
      <Community/>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})
