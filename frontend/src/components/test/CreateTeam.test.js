import React, { Component } from "react";
import CreateTeam from "../CreateTeam";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {configure, mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {fireEvent, render} from "@testing-library/react";

configure({ adapter: new Adapter() });

/**
 * I am testing primarily the components of the form
 */

let container;
let updateTournamentName;
let wrapper
beforeEach(() => {
  updateTournamentName = CreateTeam.prototype.updateTournamentName
  wrapper = shallow(<CreateTeam/>);
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  jest.clearAllMocks()
});

const setup = () => {
  const utils = render(<BrowserRouter><CreateTeam /> </BrowserRouter>)
  const teamName = utils.getByLabelText('Name your Team')
  return {
    teamName,
    ...utils,
  }
}


it("matches the snapshot of CreateTournament", () =>{
  const tree = renderer
    .create(
      <BrowserRouter>
        <CreateTeam/>
      </BrowserRouter>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})

describe('test the inputs of Create Team', () => {
  test('Team Name input', () =>{
      const { teamName } = setup()
      fireEvent.change(teamName, { target: { value: 'Example Team Name' } })
      expect(teamName.value).toBe('Example Team Name')
  })
})

describe('Simulates the Member-Level Radio Buttons', () => {
  test('Select Beginner', () => {
    const {getByTestId} = render(<BrowserRouter> <CreateTeam/> </BrowserRouter>);
    const radio = getByTestId("beginner-option");
    fireEvent.change(radio, {
      target: {value: "Beginner"}
    });
    expect(radio.value).toEqual("Beginner")
  })
  test('Select Intermediate', () =>{
    const {getByTestId} = render(<BrowserRouter> <CreateTeam/> </BrowserRouter>);
    const radio = getByTestId("intermediate-option");
    fireEvent.change(radio, {
      target: {value: "Intermediate"}
    });
    expect(radio.value).toEqual("Intermediate")
  })

  test('Select Advanced', () =>{
    const {getByTestId} = render(<BrowserRouter> <CreateTeam/> </BrowserRouter>);
    const radio = getByTestId("advanced-option");
    fireEvent.change(radio, {
      target: {value: "Advanced"}
    });
    expect(radio.value).toEqual("Advanced")
  })
})
