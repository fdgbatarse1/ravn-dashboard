'use client';

import Button from '@/components/button';
import ErrorMessage from '@/utils/formatters/errorMessage/errorMessage';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const message = ErrorMessage(error.message);
  return (
    <section className="flex h-full w-full flex-col items-center justify-center space-y-8 text-center text-body-l font-semibold md:text-display-xs">
      <h2>{message}</h2>
      <Button className="bg-neutral-3 text-neutral-1" onClick={reset}>
        Try again
      </Button>
    </section>
  );
};

export default ErrorPage;
