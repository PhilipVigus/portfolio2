import { render, screen } from '@testing-library/react';
import SkillCard from '../components/pages/skills/SkillCard';

describe('SkillCard component', () => {
  it('Renders the component', () => {
    render(<SkillCard title="test title" skills={['skill 1', 'skill 2']} />);

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('skill 1')).toBeInTheDocument();
    expect(screen.getByText('skill 2')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(2);

    console.log(listItems[0].innerHTML);

    expect(listItems[0].innerHTML).toBe('skill 1');
    expect(listItems[1].innerHTML).toBe('skill 2');
  });
});
