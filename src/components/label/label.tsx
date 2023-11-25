interface LabelProps {
  text: string;
  className: string;
}

const Label = ({ text, className }: LabelProps) => (
  <p
    className={`w-min whitespace-nowrap rounded px-4 py-1 text-body-m font-semibold uppercase ${className}`}
  >
    {text}
  </p>
);

export default Label;
