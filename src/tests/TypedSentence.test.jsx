import { render, screen, waitFor } from '@testing-library/react';
import TypedSentence from '../components/pages/loading/TypedSentence';

describe('TypedSentence Component', () => {
  const onFinishDisplay = jest.fn();

  it('does not initially render any text', () => {
    render(<TypedSentence sentence="test" onFinishDisplay={onFinishDisplay} speed={1} />);

    expect(screen.queryByText('test')).toBeNull();
  });

  it('renders the sentence eventually', async () => {
    const sentence = 'hi';

    render(<TypedSentence sentence={sentence} onFinishDisplay={onFinishDisplay} speed={1} />);

    await waitFor(
      () => {
        expect(screen.getByText(sentence)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
