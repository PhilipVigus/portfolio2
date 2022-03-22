import { render, screen, waitFor } from '@testing-library/react';
import TypedSentence from '../components/pages/loading/TypedSentence';

describe('TypedSentence Component', () => {
  it('does not initially render any text', () => {
    render(<TypedSentence sentence="test" />);

    expect(screen.queryByText('test')).toBeNull();
  });

  it('renders the first character after the specified time period', async () => {
    const sentence = 'hi';

    render(<TypedSentence sentence={sentence} />);

    await waitFor(
      () => {
        expect(screen.getByText(sentence)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
