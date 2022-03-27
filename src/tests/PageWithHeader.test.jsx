import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Cursor from '../components/loading/Cursor';
import PageWithHeader from '../layout/PageWithHeader';

describe('PageWithHeader layout component', () => {
  it('Renders the component', () => {
    render(
      <Router>
        <PageWithHeader>
          <p>Test Content</p>
        </PageWithHeader>
      </Router>
    );

    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
