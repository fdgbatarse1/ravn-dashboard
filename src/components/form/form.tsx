'use client';

import {
  RiIncreaseDecreaseFill,
  RiUser3Fill,
  RiPriceTag3Fill,
  RiCalendarCheckLine,
} from 'react-icons/ri';

import Button from '../button';
import Label from '../label';

const options = [
  {
    icon: RiIncreaseDecreaseFill,
    text: 'Estimate',
  },
  {
    icon: RiUser3Fill,
    text: 'Assignee',
  },
  {
    icon: RiPriceTag3Fill,
    text: 'Label',
  },
  {
    icon: RiCalendarCheckLine,
    text: 'Due date',
  },
];

interface FormProps {
  onClose: () => void;
}

const Form = ({ onClose }: FormProps) => {
  const onSubmit = async () => {};

  return (
    <form className="flex w-min flex-col space-y-6 rounded-lg bg-neutral-3 p-4">
      <input
        type="text"
        className="bg-transparent text-body-xl font-semibold text-neutral-1 placeholder:text-neutral-2 focus-visible:outline-none"
        placeholder="Task Title"
      />
      <div className="flex space-x-4">
        {options.map(({ icon: Icon, text }) => (
          <Label
            key={text}
            icon={Icon}
            text={text}
            className="bg-neutral-2 bg-opacity-10 text-neutral-1"
          />
        ))}
      </div>
      <div className="flex justify-end space-x-6">
        <Button className="bg-transparent text-neutral-1" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-primary-2 text-neutral-1" onClick={onSubmit}>
          Create
        </Button>
      </div>
    </form>
  );
};

export default Form;
