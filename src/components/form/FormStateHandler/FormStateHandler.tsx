interface FormStateHandlerProps<T> {
  children: React.ReactNode;
  loading: boolean;
  error: T;
  onClose: () => void;
}

const FormStateHandler = <T,>({ children, loading, error, onClose }: FormStateHandlerProps<T>) => {
  if (loading || error) {
    return (
      <div className="flex w-min flex-col space-y-4 whitespace-nowrap rounded-lg bg-neutral-3 p-4 text-neutral-1">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    );
  }
  return children;
};

export default FormStateHandler;
