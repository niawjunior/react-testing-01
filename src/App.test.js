import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello', () => {
  render(<App />);
  const helloEl = screen.getByRole('button', { name: 'hello' });
  expect(helloEl).toBeInTheDocument();
});
