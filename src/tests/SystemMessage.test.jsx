import { render, screen, waitFor } from '@testing-library/react';
import SystemMessage from '../components/pages/loading/SystemMessage';
import TypedSentence from '../components/pages/loading/TypedSentence';

describe('SystemMessage Component', () => {
  const onFinishDisplay = jest.fn();

  it('initially only renders the message', async () => {
    render(<SystemMessage message="test" onFinishDisplay={onFinishDisplay} speed={1} />);

    await waitFor(() => {
      expect(screen.queryByText('test .')).toBeNull();
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });

  it('renders the dots eventually', async () => {
    render(<SystemMessage message="test" onFinishDisplay={onFinishDisplay} speed={2} />);

    await waitFor(() => {
      expect(screen.queryByText('test . .')).toBeInTheDocument();
    });
  });
});
