import throttle from '@/utils/throttle';

interface ButtonProps {
  submit?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ submit = false, children, onClick = undefined, className = '' }: ButtonProps) => {
  const throttledFn = onClick ? throttle(() => onClick(), 1000) : undefined;
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={throttledFn}
      className={`rounded-lg p-2 text-body-m ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
