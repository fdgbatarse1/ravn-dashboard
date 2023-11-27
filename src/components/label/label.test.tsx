import { render, screen } from '@testing-library/react';
import Label from './label';

describe('Label', () => {
  it('renders the label text', () => {
    const labelText = 'Test Label';
    render(<Label text={labelText} className="" />);
    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the label with the provided className', () => {
    const className = 'custom-class';
    render(<Label text="Test Label" className={className} />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement.parentElement).toHaveClass(className);
  });

  it('renders the label with an icon', () => {
    const icon = <span className="icon" data-testid="label-icon" />;
    render(<Label text="Test Label" className="" icon={icon} />);
    const iconElement = screen.getByTestId('label-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
