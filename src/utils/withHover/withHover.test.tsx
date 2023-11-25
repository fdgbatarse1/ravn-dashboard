import { render, screen } from '@testing-library/react';
import withHover from './withHover';

const MockComponent = () => <div>Test Component</div>;

describe('withHover HOC', () => {
  it('renders the wrapped component', () => {
    const ComponentWithHover = withHover(MockComponent);
    render(<ComponentWithHover />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});
