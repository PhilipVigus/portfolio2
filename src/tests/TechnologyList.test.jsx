import { render, screen } from '@testing-library/react';
import Project, { githubLinkText, demoLinkText } from '../components/pages/projects/Project';
import TechnologyList from '../components/pages/projects/TechnologyList';

describe('TechnologyList Component', () => {
  it('Renders the TechnologyList component', () => {
    const testData = {
      languages: ['language'],
      frontend: ['frontend framework'],
      backend: {
        frameworks: ['backend framework'],
        databases: ['database']
      },
      testing: ['testing framework'],
      ci_cd: ['ci/cd solution']
    };

    render(<TechnologyList technologies={testData} />);

    expect(screen.getByText(testData.languages[0])).toBeInTheDocument();
    expect(screen.getByText(testData.frontend[0])).toBeInTheDocument();
    expect(screen.getByText(testData.backend.frameworks[0])).toBeInTheDocument();
    expect(screen.getByText(testData.backend.databases[0])).toBeInTheDocument();
    expect(screen.getByText(testData.testing[0])).toBeInTheDocument();
    expect(screen.getByText(testData.ci_cd[0])).toBeInTheDocument();
  });
});
