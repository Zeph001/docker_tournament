import Registration from "../auth/Registration";
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer'
import Enzyme from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {shallow, configure, mount} from 'enzyme'


configure({ adapter: new Adapter() });


beforeEach(() => {

});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<BrowserRouter> <Registration/> </BrowserRouter>, div)
})

describe('simulate the input fields', () =>{
  test("tests the change in the email input field", () =>{
    const {getByTestId} = render(<BrowserRouter> <Registration /> </BrowserRouter>);
    const content = getByTestId("email-input");
    const contentInput = content.children[0]; //Semantic-ui is wrapping the input in a div, so I have to take the child of that div
    fireEvent.change(contentInput, {
      target: { value: "test@test.de" }
    });
    expect(contentInput.value).toEqual("test@test.de")
  })

  test("tests the change in the password input field", () =>{
    const {getByTestId} = render(<BrowserRouter> <Registration /> </BrowserRouter>);
    const content = getByTestId("password-input");
    const contentInput = content.children[0];
    fireEvent.change(contentInput, {
      target: { value: "12345678" }
    });
    expect(contentInput.value).toEqual("12345678")
  })

  test("tests the change in the password confirmation input field", () =>{
    const {getByTestId} = render(<BrowserRouter> <Registration /> </BrowserRouter>);
    const content = getByTestId("password-confirmation-input");
    const contentInput = content.children[0];
    fireEvent.change(contentInput, {
      target: { value: "12345678" }
    });
    expect(contentInput.value).toEqual("12345678")
  })
})



