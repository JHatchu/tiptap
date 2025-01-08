import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('react-router-dom', () => ({
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ path, element }) => <div path={path}>{element}</div>,
}));
