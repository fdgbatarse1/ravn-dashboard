interface ButtonProps {
  submit?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ submit = false, children, onClick = undefined, className = '' }: ButtonProps) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    className={`rounded-lg p-2 text-body-m ${className}`}
  >
    {children}
  </button>
);

export default Button;
