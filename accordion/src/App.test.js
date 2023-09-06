import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Question component', () => {
  render(<App />);
  const linkElement = screen.getByText("Questions");
  expect(linkElement).toBeInTheDocument();
});
