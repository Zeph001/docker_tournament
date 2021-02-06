import { render, screen, fireEvent } from '@testing-library/react';
import React, { Component } from "react";
import CreateTournament from "../CreateTournament";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {configure, mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

let container;
let updateTournamentName;
let wrapper

beforeEach(() => {
  updateTournamentName = CreateTournament.prototype.updateTournamentName
  wrapper = shallow(<CreateTournament/>);
  container = document.createElement('div');
  document.body.appendChild(container);

});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  jest.clearAllMocks()
});

test("matches the snapshot of CreateTournament", () =>{
  const tree = renderer
    .create(
      <BrowserRouter>
        <CreateTournament/>
      </BrowserRouter>
    )
    .toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})

const setup = () => {
  const utils = render(<BrowserRouter><CreateTournament /> </BrowserRouter>)
  const tournamentName = utils.getByLabelText('Name of your Tournament')
  const bestOf1 = utils.getByLabelText('Best of 1')
  const bestOf3 = utils.getByLabelText('Best of 3')
  return {
    tournamentName,
    bestOf1,
    bestOf3,
    ...utils,
  }
}
describe("simulates all Tournament Form options", () =>{
  test('simulates Single KO', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><CreateTournament /> </BrowserRouter>);
    fireEvent.change(getByTestId('select'), { target: { value: "Single KO" } })
    let options = getAllByTestId('select-option')
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  })

  test('simulates Double KO', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><CreateTournament /> </BrowserRouter>);
    fireEvent.change(getByTestId('select'), { target: { value: "Double KO" } })
    let options = getAllByTestId('select-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  })

})

describe('simulates the inputs of Create Tournament', () => {
  test('test the input of Tournament Name', () => {
    const { tournamentName } = setup()
    fireEvent.change(tournamentName, { target: { value: '23' } })
    expect(tournamentName.value).toBe('23')
  })

  test('test the input of Team Name 1', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter> <CreateTournament /> </BrowserRouter>);
    const contentInput = getByTestId("team-input1");
    fireEvent.change(contentInput, {
      target: { value: "new content" }
    });
    expect(contentInput.value).toEqual("new content")

  })

  test('test the input of Team Name 3', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter> <CreateTournament /> </BrowserRouter>);
    const contentInput = getByTestId("team-input3");
    fireEvent.change(contentInput, {
      target: { value: "new content" }
    });
    expect(contentInput.value).toEqual("new content")

  })

  test('test the input of Team Name 7', () =>{
    const { getByTestId } = render(<BrowserRouter> <CreateTournament /> </BrowserRouter>);
    const contentInput = getByTestId("team-input7");
    fireEvent.change(contentInput, {
      target: { value: "new content" }
    });
    expect(contentInput.value).toEqual("new content")

  })

  test('test the input of Team Name 13', () =>{
    const { getByTestId } = render(<BrowserRouter> <CreateTournament /> </BrowserRouter>);
    const contentInput = getByTestId("team-input13");
    fireEvent.change(contentInput, {
      target: { value: "new content" }
    });
    expect(contentInput.value).toEqual("new content")

  })
})

describe('Simulates the Best-Of Radio Buttons', () => {
  test('Select Best of 1', () => {
    const {getByTestId} = render(<BrowserRouter> <CreateTournament/> </BrowserRouter>);
    const radio = getByTestId("best-of-1-option");
    fireEvent.change(radio, {
      target: {value: "Best of 1"}
    });
    expect(radio.value).toEqual("Best of 1")
  })
  test('Select Best of 3', () =>{
    const {getByTestId} = render(<BrowserRouter> <CreateTournament/> </BrowserRouter>);
    const radio = getByTestId("best-of-3-option");
    fireEvent.change(radio, {
      target: {value: "Best of 3"}
    });
    expect(radio.value).toEqual("Best of 3")
  })
})

describe("simulates all Bracket Size options", () =>{
  test('Bracket 4', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><CreateTournament /> </BrowserRouter>);
    fireEvent.change(getByTestId('select-bracket'), { target: { value: "4" } })
    let options = getAllByTestId('bracket-option')
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();

  })

  test('Bracket 8', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><CreateTournament /> </BrowserRouter>);
    fireEvent.change(getByTestId('select-bracket'), { target: { value: "8" } })
    let options = getAllByTestId('bracket-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();

  })

  test('Bracket 16', () =>{
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><CreateTournament /> </BrowserRouter>);
    fireEvent.change(getByTestId('select-bracket'), { target: { value: "16" } })
    let options = getAllByTestId('bracket-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();

  })

})

// describe('simulate the function calls when a input is used', () =>{
//   test('function call of Tournament Name input', () =>{
//     const onChange = jest.fn();
//     const { getByTestId } = render(<BrowserRouter><CreateTournament onChange ={onChange}/></BrowserRouter>);
//
//     fireEvent.change(getByTestId("tournament-name"))
//     expect(onChange).toHaveBeenCalled();
//   })
// })

// it("fills out form and sends it", () =>{
//   const wrapper = mount(<BrowserRouter><CreateTournament/></BrowserRouter>);
//   wrapper.setState({tournamentName: "testName"})
//   console.log(wrapper.find('#tournamentNameId').first().html())
//   const input = wrapper.find('#tournamentNameId')
//   input.instance().value = "test"
//   input.simulate('change')
//   wrapper.update()
//
// })
