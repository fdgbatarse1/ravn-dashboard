/**
 * Creates a throttled function that only invokes the provided function at most once during the specified wait period.
 *
 * @param fn - The function to throttle.
 * @param wait - The number of milliseconds to wait before allowing the next invocation of the throttled function.
 * @returns A throttled version of the passed function.
 *
 * @example
 * // Throttle a function to be called at most once every 1000 milliseconds
 * const throttledFn = throttle(() => console.log('Throttled function called'), 1000);
 * window.addEventListener('resize', throttledFn);
 */
const throttle = (fn: Function, wait: number) => {
  let isCalled = false;

  return (...args: unknown[]) => {
    if (!isCalled) {
      fn(...args);
      isCalled = true;
      setTimeout(() => {
        isCalled = false;
      }, wait);
    }
  };
};

export default throttle;
