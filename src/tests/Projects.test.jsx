import { render, screen } from '@testing-library/react';

import data from '../components/pages/projects/data.json';
import Projects from '../components/pages/projects/Projects';

xdescribe('Projects Page', () => {
  it('Renders the projects page', () => {
    render(<Projects />);

    data.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
