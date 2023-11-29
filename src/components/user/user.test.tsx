import { render, screen } from '@testing-library/react';
import User from './user';

describe('User', () => {
  test('renders user with avatar and text', () => {
    const src =
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const alt = 'User Avatar';
    const className = 'user-avatar';
    const text = 'John Doe';

    render(<User src={src} alt={alt} className={className} text={text} />);

    const avatarElement = screen.getByRole('img', { name: alt });
    const textElement = screen.getByText(text);

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src');
    expect(textElement).toBeInTheDocument();
  });
});
