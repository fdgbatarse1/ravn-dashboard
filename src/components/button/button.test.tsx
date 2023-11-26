import { render, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders the button correctly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders a submit button when submit prop is true', () => {
    const { getByRole } = render(
      <Button submit onClick={() => {}}>
        Submit
      </Button>,
    );

    const button = getByRole('button', { name: 'Submit' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('applies the provided className to the button', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} className="custom-button">
        Click me
      </Button>,
    );
    const button = getByText('Click me');
    expect(button).toHaveClass('custom-button');
  });
});
