import React from 'react';
import { render } from '@testing-library/react';
import Reaction from './reaction';

describe('Reaction', () => {
  it('renders the count and icon', () => {
    const count = 5;
    const icon = <svg data-testid="reaction-icon" />;
    const { getByText, getByTestId } = render(<Reaction count={count} icon={icon} />);

    expect(getByText(count.toString())).toBeInTheDocument();
    expect(getByTestId('reaction-icon')).toBeInTheDocument();
  });
});
