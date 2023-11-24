import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from './sidebar';

describe('Sidebar Component', () => {
  it('renders the sidebar with all elements', () => {
    render(<Sidebar />);

    const links = screen.getAllByRole('link');

    const ravnIcon = links.find((link) => link.getAttribute('href') === 'https://www.ravn.co/');
    expect(ravnIcon).toHaveAttribute('href', 'https://www.ravn.co/');

    const Dashboard = links.find((link) => link.textContent === 'dashboard');
    expect(Dashboard).toHaveAttribute('href', '/');
  });
});
