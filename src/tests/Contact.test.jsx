import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders Contact page', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});