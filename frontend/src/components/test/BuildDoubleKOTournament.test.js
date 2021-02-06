import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import React from "react";
import BuildDoubleKOTournament from "../BuildDoubleKOTournament";

const setup = () => {
  const div = document.createElement("div")
  const handleNextRound = jest.fn()
  return {
    handleNextRound,
    div
  }
}
beforeEach(() =>{
  console.error = jest.fn()
})

afterEach(() => {
  jest.clearAllMocks();
});

//I only test here until 8 participants, because there is no option for 16 participants in Double KO yet
describe("test the rendering of double KO tournament", () => {
  test("Bracket 4 renders without crashing", () => {
    const {div, handleNextRound} = setup()
    ReactDOM.render(<BuildDoubleKOTournament
      nextRound={handleNextRound}
      names={["1","2","3","4"]}
      numOfSeeds={"4"}
      doubleKO={true}
      tournamentName={"test tournament name"}
    />, div)
  })

  test("Bracket 8 renders without crashing", () => {
    const {div, handleNextRound} = setup()
    ReactDOM.render(<BuildDoubleKOTournament
      nextRound={handleNextRound}
      names={["1","2","3","4", "5", "6", "7", "8"]}
      numOfSeeds={"8"}
      doubleKO={true}
      tournamentName={"test tournament name"}
    />, div)
  })
})

describe("the rendering of double KO tournament should fail", () => {
  test('bracket without props will fail', () => {
    expect(() => {
      render(<BuildDoubleKOTournament/>)
    }).toThrowError()
  })

  test('bracket 4 will fail because of 5 member', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"5"}
        doubleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })


  test('bracket 4 will fail because of 3 member', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"3"}
        doubleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 4 will fail because of only 1 participant', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1"]}
        numOfSeeds={"4"}
        doubleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })
  test('bracket 8 will fail because of only 1 participant', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1"]}
        numOfSeeds={"8"}
        doubleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 4 will fail because the boolean for the tournament form is false ', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"4"}
        doubleKO={false}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 8 will fail because the boolean for the tournament form is false ', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildDoubleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4", "5", "6", "7", "8"]}
        numOfSeeds={"4"}
        doubleKO={false}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })
})
