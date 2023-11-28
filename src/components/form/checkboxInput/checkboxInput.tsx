interface CheckboxArrayElement {
  id: string;
  text: string;
}

type CheckboxArray = CheckboxArrayElement[];

interface CheckboxInputProps {
  name: string;
  array: CheckboxArray | undefined;
}

const CheckboxInput = ({ name, array }: CheckboxInputProps) => (
  <div>
    {array?.map(({ id, text }) => (
      <div className="flex space-x-2" key={id}>
        <input className="bg-neutral-1" type="checkbox" id={`label-${id}`} name={name} value={id} />
        <label className="text-body-m font-semibold text-neutral-1" htmlFor={`label-${id}`}>
          {text}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxInput;
