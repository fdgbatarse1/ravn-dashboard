interface SelectArrayElement {
  id: string;
  text: string;
}

type SelectArray = SelectArrayElement[];

interface SelectInputProps {
  name: string;
  array: SelectArray | undefined;
  defaultValue?: string;
}

const SelectInput = ({ name, array, defaultValue }: SelectInputProps) => (
  <select
    defaultValue={defaultValue}
    name={name}
    className="rounded bg-neutral-1 text-body-m text-neutral-4"
  >
    {array?.map(({ id, text }) => (
      <option key={id} value={id}>
        {text}
      </option>
    ))}
  </select>
);

export default SelectInput;
