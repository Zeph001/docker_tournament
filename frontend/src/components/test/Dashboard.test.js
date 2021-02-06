import Dashboard from "../Dashboard";
import ReactDOM from 'react-dom'
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {configure, mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
let showLogoutButton

beforeEach(() => {
  showLogoutButton = Dashboard.prototype.logoutButton
});

afterEach(() => {
  jest.clearAllMocks();
});

test("dashboard renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<BrowserRouter><Dashboard/> </BrowserRouter>, div)
})


test('does not show logout button', () =>{
  expect(showLogoutButton("NOT_LOGGED_IN")).toBe(undefined)
})



