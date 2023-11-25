const withHover = <T extends {}>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithHover = (props: T) => (
    <span className="text-neutral-2 hover:text-primary-4">
      <WrappedComponent {...(props as T)} />
    </span>
  );

  return ComponentWithHover;
};

export default withHover;
