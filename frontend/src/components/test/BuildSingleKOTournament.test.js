import ReactDOM from 'react-dom'
import React from "react";
import BuildSingleKOTournament from "../BuildSingleKOTournament";

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

describe("test the rendering of the single tournament with 4 seats", () => {
  test("Bracket 4 renders without crashing", () => {
    const {div, handleNextRound} = setup()
    ReactDOM.render(<BuildSingleKOTournament
      nextRound={handleNextRound}
      names={["Team 1","Team 2","Team 3","Team 4"]}
      numOfSeeds={"4"}
      singleKO={true}
      tournamentName={"test tournament name"}
    />, div)
  })

  test("Bracket 8 renders without crashing", () => {
    const {div, handleNextRound} = setup()
    ReactDOM.render(<BuildSingleKOTournament
      nextRound={handleNextRound}
      names={["1","2","3","4", "5", "6", "7", "8"]}
      numOfSeeds={"8"}
      singleKO={true}
      tournamentName={"test tournament name"}
    />, div)
  })

  test("Bracket 16 renders without crashing", () => {
    const {div, handleNextRound} = setup()
    ReactDOM.render(<BuildSingleKOTournament
      nextRound={handleNextRound}
      names={["1","2","3","4", "5", "6", "7", "8","9","10","11","12", "13", "14", "15", "16"]}
      numOfSeeds={"16"}
      singleKO={true}
      tournamentName={"test tournament name"}
    />, div)
  })

})

describe("the rendering Bracket 4 should fail", () => {
  test('bracket without props will fail', () => {
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament/>)
    }).toThrowError()
  })

  test('bracket 4 will fail because of 5 seats', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"5"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })


  test('bracket 4 will fail because of 3 seats', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"3"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 4 will fail because of only 1 given participant', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1"]}
        numOfSeeds={"4"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 4 will fail because the boolean for the tournament form is false', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"4"}
        singleKO={false}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })


})

describe("the rendering of Bracket 8 should fail", () => {

  test('bracket 8 will fail because of 9 seats', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"9"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 8 will fail because of only 1 given participant', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1"]}
        numOfSeeds={"8"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 8 will fail because the boolean for the tournament form is false', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4","5","6","7","8"]}
        numOfSeeds={"8"}
        singleKO={false}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })


})

describe("the rendering of Bracket 16 should fail", () => {
  test('bracket 16 will fail because of 17 seats', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4"]}
        numOfSeeds={"17"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 16 will fail because of only 1 given participant', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1"]}
        numOfSeeds={"16"}
        singleKO={true}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

  test('bracket 16 will fail because the boolean for the tournament form is false', () => {
    const {div, handleNextRound} = setup()
    expect(() => {
      ReactDOM.render(<BuildSingleKOTournament
        nextRound={handleNextRound}
        names={["1","2","3","4", "5", "6", "7", "8","9","10","11","12", "13", "14", "15", "16"]}
        numOfSeeds={"8"}
        singleKO={false}
        tournamentName={"test tournament name"}
      />, div)
    }).toThrowError()
  })

})
