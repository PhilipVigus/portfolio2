import { render, screen } from '@testing-library/react';
import Cursor from '../components/loading/Cursor';

describe('Cursor component', () => {
  it('Renders the component', () => {
    render(<Cursor />);

    expect(screen.getByText('█')).toBeInTheDocument();
  });
});
