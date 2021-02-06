import { render, screen } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom'
import React from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders without crashing", async () => {
  const div = document.createElement("div")
  ReactDOM.render(<App/>, div)
})
