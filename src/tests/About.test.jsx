import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders About page', () => {
  render(<About />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
