import throttle from './throttle';

describe('throttle', () => {
  it('should throttle the function call', () => {
    jest.useFakeTimers();

    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
