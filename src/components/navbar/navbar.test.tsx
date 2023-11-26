import { render, screen } from '@testing-library/react';
import NavigationBar from './navbar';

describe('NavigationBar', () => {
  test('renders search input', () => {
    render(<NavigationBar />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  test('renders user profile image', () => {
    render(<NavigationBar />);
    const userProfileImage = screen.getByAltText('User profile');
    expect(userProfileImage).toBeInTheDocument();
  });
});
