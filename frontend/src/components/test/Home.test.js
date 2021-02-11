import {act} from '@testing-library/react';
import Home from '../Home';
import ReactDOM from 'react-dom'
import React from "react";

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("renders without crashing", () => {
  ReactDOM.render(<Home/>, container)
})

test("checks the page", () => {
  act(() =>{
    ReactDOM.render(<Home />, container);
  })
  const h1 = container.querySelector('#home');
  expect(h1.textContent).toBe('Home');

})
