import { render, screen, waitFor } from '@testing-library/react';
import SystemMessage from '../components/loading/SystemMessage';

describe('SystemMessage Component', () => {
  const onFinishDisplay = jest.fn();

  it('initially only renders the message', async () => {
    render(
      <SystemMessage message="test" onFinishDisplay={onFinishDisplay} displayProgress speed={25} />
    );

    await waitFor(() => {
      expect(screen.queryByText('test .')).toBeNull();
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });

  it('renders the progress eventually', async () => {
    render(
      <SystemMessage message="test" onFinishDisplay={onFinishDisplay} displayProgress speed={25} />
    );

    await waitFor(() => {
      expect(screen.queryByText('test . .')).toBeInTheDocument();
    });
  });

  it('doesnt render the progress if you turn progress off', async () => {
    render(
      <SystemMessage
        message="test"
        onFinishDisplay={onFinishDisplay}
        displayProgress={false}
        speed={25}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('test . .')).not.toBeInTheDocument();
    });
  });
});
