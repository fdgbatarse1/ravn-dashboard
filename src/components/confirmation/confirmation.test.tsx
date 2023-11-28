import { render, screen, fireEvent } from '@testing-library/react';
import Confirmation from './confirmation';

describe('Confirmation', () => {
    const mockOnConfirm = jest.fn();
    const mockOnCancel = jest.fn();

    beforeEach(() => {
        render(
            <Confirmation
                text="Are you sure?"
                onConfirm={mockOnConfirm}
                onCancel={mockOnCancel}
            />
        );
    });

    it('renders the confirmation text', () => {
        const confirmationText = screen.getByText('Are you sure?');
        expect(confirmationText).toBeInTheDocument();
    });

    it('calls the onConfirm function when "Yes" button is clicked', () => {
        const confirmButton = screen.getByText('Yes');
        fireEvent.click(confirmButton);
        expect(mockOnConfirm).toHaveBeenCalled();
    });

    it('calls the onCancel function when "No" button is clicked', () => {
        const cancelButton = screen.getByText('No');
        fireEvent.click(cancelButton);
        expect(mockOnCancel).toHaveBeenCalled();
    });
});
