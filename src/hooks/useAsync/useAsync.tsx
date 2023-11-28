'use client';

import { useCallback, useEffect, useState } from 'react';

type UseAsyncReturnType<T> = [boolean, unknown, T | undefined];

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
