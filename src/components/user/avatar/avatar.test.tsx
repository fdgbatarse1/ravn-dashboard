import { render } from '@testing-library/react';
import Avatar from './avatar';

describe('Avatar', () => {
  it('renders the avatar image with the correct src and alt', () => {
    const src =
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const alt = 'Avatar Image';
    const className = 'avatar';

    const { getByAltText } = render(<Avatar src={src} alt={alt} className={className} />);

    const avatarImage = getByAltText(alt);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src');
  });
});
