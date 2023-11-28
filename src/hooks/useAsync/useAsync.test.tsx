import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useAsync from './useAsync';

const TestComponent = ({ asyncFunction }: { asyncFunction: jest.Mock<any, any, any> }) => {
  const [loading, error, value] = useAsync<string>(asyncFunction);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: Error</div>;
  if (value) return <div>Value: {value}</div>;
  return null;
};

describe('useAsync hook', () => {
  it('should show loading initially', async () => {
    const mockAsyncFunction = jest.fn().mockResolvedValue('test value');
    render(<TestComponent asyncFunction={mockAsyncFunction} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  it('should handle a resolved value correctly', async () => {
    const mockAsyncFunction = jest.fn().mockResolvedValue('test value');
    render(<TestComponent asyncFunction={mockAsyncFunction} />);

    await waitFor(() => expect(screen.getByText('Value: test value')).toBeInTheDocument());
  });

  it('should handle errors correctly', async () => {
    const mockError = new Error('Test error');
    const mockAsyncFunction = jest.fn().mockRejectedValue(mockError);
    render(<TestComponent asyncFunction={mockAsyncFunction} />);

    await waitFor(() => expect(screen.getByText(`Error: Error`)).toBeInTheDocument());
  });
});
