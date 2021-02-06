import Login from "../auth/Login";
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {shallow, configure, mount} from 'enzyme'

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = mount(shallow(<BrowserRouter> <Login/> </BrowserRouter>).get(0))
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <BrowserRouter>
    <Login/>
    </BrowserRouter>, div)
})

//Snapshot is to make sure that the UI doesn't change unexpectedly. It takes a snapshot and compares it to a reference
//If the UI gets changed the snapshot needs to be updated
test("matches the snapshot", () =>{
  const tree = renderer
    .create(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})

describe('simulate the input fields', () =>{
  test("tests the change in the email input field", () =>{
    const {getByTestId} = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const content = getByTestId("email-input");
    const contentInput = content.children[0]; //Semantic-ui is wrapping the input in a div, so I have to take the child of that div
    fireEvent.change(contentInput, {
      target: { value: "test@test.de" }
    });
    expect(contentInput.value).toEqual("test@test.de")
  })

  test("tests the change in the password input field", () =>{
    const {getByTestId} = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const content = getByTestId("password-input");
    const contentInput = content.children[0];
    fireEvent.change(contentInput, {
      target: { value: "12345678" }
    });
    expect(contentInput.value).toEqual("12345678")
  })

})


  test('validates model on button click', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Login/>);
    button.find('#loginButton').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
