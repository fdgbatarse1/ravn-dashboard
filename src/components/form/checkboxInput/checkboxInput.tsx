import { TaskTag } from '@/gql/graphql';

interface CheckboxArrayElement {
  id: string;
  text: string;
}

type CheckboxArray = CheckboxArrayElement[];

interface CheckboxInputProps {
  name: string;
  array: CheckboxArray | undefined;
  defaultValue?: TaskTag[];
}

const CheckboxInput = ({ name, array, defaultValue }: CheckboxInputProps) => (
  <div>
    {array?.map(({ id, text }) => (
      <div className="flex space-x-2" key={id}>
        <input
          className="bg-neutral-1"
          type="checkbox"
          defaultChecked={defaultValue?.some((item) => item === id)}
          id={`label-${id}`}
          name={name}
          value={id}
        />
        <label className="text-body-m font-semibold text-neutral-1" htmlFor={`label-${id}`}>
          {text}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxInput;
