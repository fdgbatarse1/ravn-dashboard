import { render, screen } from '@testing-library/react';
import TopBar from './topbar';

describe('TopBar', () => {
  test('renders the buttons correctly', () => {
    render(<TopBar />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
});
