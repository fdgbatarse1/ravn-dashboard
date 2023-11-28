import { render, screen } from '@testing-library/react';
import TopBar from './topbar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('TopBar', () => {
  test('renders the buttons correctly', () => {
    render(<TopBar />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
});
