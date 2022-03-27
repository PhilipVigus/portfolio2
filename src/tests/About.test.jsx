import { render, screen } from '@testing-library/react';

import About from '../components/pages/about/About';

describe('About Page', () => {
  it('Renders the about page', () => {
    render(<About />);

    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
});
