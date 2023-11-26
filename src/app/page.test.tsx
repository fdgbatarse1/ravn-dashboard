import { render } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the page with correct content', () => {
    const { getAllByAltText } = render(<Home />);
    const images = getAllByAltText(/User/i);
    expect(images).toHaveLength(3);
  });
});
