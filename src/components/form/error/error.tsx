interface ErrorProps {
  error?: string[] | undefined;
}

const Error = ({ error = undefined }: ErrorProps) => {
  if (!error) return null;
  return <p className="whitespace-nowrap text-body-m font-semibold text-primary-4">{error[0]}</p>;
};

export default Error;
