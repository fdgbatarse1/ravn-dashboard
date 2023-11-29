import { render, screen } from '@testing-library/react';
import Settings from './settings';

describe('Settings', () => {
  test('renders edit and delete buttons', () => {
    const id = '123';
    render(<Settings id={id} />);

    const editButton = screen.getByText('Edit');
    const deleteButton = screen.getByText('Delete');

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
