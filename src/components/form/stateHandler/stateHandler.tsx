import throttle from '@/utils/throttle';

interface StateHandlerProps<T> {
  children: React.ReactNode;
  loading: boolean;
  externalError?: string | null;
  error: T;
  onClose: () => void;
}

const stateHandler = <T,>({
  children,
  loading,
  error,
  externalError,
  onClose,
}: StateHandlerProps<T>) => {
  if (loading || error || externalError) {
    const throttledFn = onClose ? throttle(() => onClose(), 1000) : undefined;
    return (
      <div className="flex w-min flex-col space-y-4 whitespace-nowrap rounded-lg bg-neutral-3 p-4 text-neutral-1">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        {externalError && <p>{externalError}</p>}
        <button type="button" onClick={throttledFn}>
          Cancel
        </button>
      </div>
    );
  }
  return children;
};

export default stateHandler;
