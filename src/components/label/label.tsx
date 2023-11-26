interface LabelProps {
  text: string;
  className: string;
  icon?: React.ReactNode;
}

const Label = ({ text, className, icon = undefined }: LabelProps) => (
  <div
    className={`flex w-min space-x-2 whitespace-nowrap rounded px-4 py-1 text-body-m font-semibold uppercase ${className}`}
  >
    {icon}
    <p>{text}</p>
  </div>
);

export default Label;
