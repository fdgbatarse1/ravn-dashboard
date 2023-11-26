import React from 'react';
import { render, screen } from '@testing-library/react';

import Tab from './tab';

const mockUsePathname = require('next/navigation').usePathname;

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Tab Component', () => {
  const mockIcon = <svg />;

  beforeEach(() => {
    mockUsePathname.mockReset();
  });

  it('renders correctly with given props', () => {
    render(<Tab text="Home" icon={mockIcon} href="/home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('hover:text-primary-4');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });

  it('applies active class when pathname matches href', () => {
    mockUsePathname.mockReturnValue('/home');
    render(<Tab text="Home" icon={mockIcon} href="/home" />);
    expect(screen.getByRole('link')).toHaveClass('md:border-r-4');
  });

  it('does not apply active class when pathname does not match href', () => {
    mockUsePathname.mockReturnValue('/other');
    render(<Tab text="Home" icon={mockIcon} href="/home" />);
    expect(screen.getByRole('link')).not.toHaveClass('border-r-4');
  });
});
