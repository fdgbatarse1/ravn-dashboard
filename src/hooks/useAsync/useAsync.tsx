'use client';

import { useCallback, useEffect, useState } from 'react';

type UseAsyncReturnType<T> = [boolean, unknown, T | undefined];

/**
 * Custom React hook for executing asynchronous functions with dependency tracking.
 *
 * `useAsync` is designed to handle asynchronous operations in React components. It encapsulates the common pattern of
 * tracking loading state, error state, and the value returned by an asynchronous function. It takes a callback function
 * expected to return a Promise and an optional array of dependencies.
 *
 * @param callback - A function that returns a Promise. This function is called inside the hook to initiate the asynchronous operation.
 * @param dependencies - An optional array of dependencies. The hook will re-execute the `callback` if any dependency changes.
 *
 * The hook maintains three state variables:
 *   - `loading`: A boolean indicating whether the asynchronous operation is in progress.
 *   - `error`: Stores any error thrown by the `callback` function.
 *   - `value`: The value returned by the `callback` function, once completed.
 *
 * The hook uses `useCallback` to memoize the `callback` function based on the provided dependencies, ensuring that it
 * only changes when a dependency changes. The `useEffect` hook is then used to execute the `callbackMemoized` function
 * whenever it changes.
 *
 * @returns A tuple of `[loading, error, value]` representing the current loading status, any error encountered, and
 *   the value returned by the asynchronous function, respectively.
 *
 * @example
 * const fetchData = () => fetch('/api/data').then(res => res.json());
 * const [loading, error, data] = useAsync(fetchData, []);
 *
 * @see useCallback, useEffect from React for memoization and side effect management.
 * @typeparam T - The type of the value that the asynchronous function resolves to.
 */
const useAsync = <T,>(callback: Function, dependencies = []): UseAsyncReturnType<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return [loading, error, value];
};

export default useAsync;
