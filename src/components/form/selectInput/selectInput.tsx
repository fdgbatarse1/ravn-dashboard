interface SelectArrayElement {
  id: string;
  text: string;
}

type SelectArray = SelectArrayElement[];

interface SelectInputProps {
  name: string;
  array: SelectArray | undefined;
}

const SelectInput = ({ name, array }: SelectInputProps) => (
  <select name={name} className="rounded bg-neutral-1 text-body-m text-neutral-4">
    {array?.map(({ id, text }) => (
      <option key={id} value={id}>
        {text}
      </option>
    ))}
  </select>
);

export default SelectInput;
