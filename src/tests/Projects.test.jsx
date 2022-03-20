import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

test('renders Projects page', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});