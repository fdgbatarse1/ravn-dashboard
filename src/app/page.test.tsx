import { render } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the page with correct content', () => {
    const { getByAltText } = render(<Home />);
    expect(getByAltText(/User/i)).toBeInTheDocument();
  });
});
