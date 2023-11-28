interface TextInputProps {
  name: string;
  placeholder: string;
}

const TextInput = ({ name, placeholder }: TextInputProps) => (
  <input
    type="text"
    name={name}
    className="w-full bg-transparent text-body-xl font-semibold text-neutral-1 placeholder:text-neutral-2 focus-visible:outline-none"
    placeholder={placeholder}
  />
);

export default TextInput;
