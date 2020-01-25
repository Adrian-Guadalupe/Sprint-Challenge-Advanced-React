import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
});

describe('Player Cards', () => {
  test('are the player cards visible?', () => {
    const wrapper = rtl.render(<App />);
    const playerCards = wrapper.getByTestId('card-list');
    expect(playerCards).toBeVisible();
  })
})

describe('NavBar', () => {
  test('is the nav bar rendering?', () => {
    const wrapper = rtl.render(<App />);
    const navBar = wrapper.getByText(/most searched players/i);
    expect(navBar).toBeVisible();
  })
})

describe('Dark Mode Toggle', () => {
  test('is dark mode btn visible', () => {
    const wrapper = rtl.render(<App />);
    const btn = wrapper.getByTestId('btn');
    expect(btn).toBeVisible();
  })
})
