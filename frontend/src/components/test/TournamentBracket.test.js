import TournamentBracket from "../TournamentBracket";
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import CreateTeam from "../CreateTeam";
import App from "../App";
import Community from "../Community";

let container;
let getRandomInt;
beforeEach(() => {
  getRandomInt = TournamentBracket.prototype.getRandomInt
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('gives random integers given a maximum number -> used to distribute the teams', () => {
  const getRandomInt = TournamentBracket.prototype.getRandomInt
  expect(getRandomInt(1)).toBe(0)
  expect(getRandomInt(5)).toBeLessThanOrEqual(4)
  expect(getRandomInt(5)).toBeGreaterThanOrEqual(0)
  expect(getRandomInt(100)).toBeLessThanOrEqual(99)
})

