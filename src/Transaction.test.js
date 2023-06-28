import { render, screen } from '@testing-library/react';
import Transaction from './Transaction';
import userEvent from '@testing-library/user-event';

test('on initial render, the pay button is disable', () => {
  const mockName = 'Niaw';
  render(<Transaction name={mockName} />);
  expect(screen.getByRole('button', { name: /hello/i })).toBeDisabled();
});

test('if name entered the hello enable', () => {
  const mockName = 'Niaw';
  render(<Transaction name={mockName} />);
  userEvent.type(screen.getByPlaceholderText(/name/i), 'niaw');
  expect(screen.getByRole('button', { name: /hello/i })).toBeEnabled();
});
