import { render, screen } from '@testing-library/react';
import CommandPrompt from '../components/pages/loading/CommandPrompt';

describe('CommandPrompt component', () => {
  it('Renders the component', () => {
    render(<CommandPrompt />);

    expect(screen.getByText('phil@awesome-dev')).toBeInTheDocument();
    expect(screen.getByText(':')).toBeInTheDocument();
    expect(screen.getByText('~')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
  });
});
