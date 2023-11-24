import { render } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the page with correct content', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Hello/i)).toBeInTheDocument();
  });
});
