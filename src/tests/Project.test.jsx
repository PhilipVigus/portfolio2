import { render, screen } from '@testing-library/react';
import Project from '../components/pages/projects/Project';

describe('Project Component', () => {
  it('Renders the Project component', () => {
    const testData = {
      title: 'test title'
    };

    render(<Project data={testData} />);

    expect(screen.getByText(testData.title)).toBeInTheDocument();
  });
});
