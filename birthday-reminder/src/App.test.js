import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Birthdays', () => {
  render(<App />);
  const linkElement = screen.getByText("5 Birthdays Today");
  expect(linkElement).toBeInTheDocument();
});

test('renders Birthdays', () => {
  render(<App />);
  const linkElement = screen.getByText("Bertie Yates");
  expect(linkElement).toBeInTheDocument();
});
