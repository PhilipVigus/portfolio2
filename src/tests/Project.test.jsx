import { render, screen } from '@testing-library/react';
import Project, { githubLinkText, demoLinkText } from '../components/pages/projects/Project';

describe('Project Component', () => {
  it('Renders the Project component', () => {
    const testData = {
      title: 'title',
      description: 'description',
      image: 'image.png',
      technologies: {
        languages: ['language'],
        frontend: ['frontend framework'],
        backend: {
          frameworks: ['backend framework'],
          databases: ['database']
        },
        testing: ['testing framework'],
        ci_cd: ['ci/cd solution']
      },
      links: {
        github: 'www.github.com',
        demo: 'www.demo.com'
      }
    };

    render(<Project data={testData} />);

    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(screen.getByText(testData.description)).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.languages[0])).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.frontend[0])).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.backend.frameworks[0])).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.backend.databases[0])).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.testing[0])).toBeInTheDocument();
    expect(screen.getByText(testData.technologies.ci_cd[0])).toBeInTheDocument();
    expect(screen.getByRole('link', { name: githubLinkText }).href).toContain('www.github.com');
    expect(screen.getByRole('link', { name: demoLinkText }).href).toContain('www.demo.com');
  });
});
