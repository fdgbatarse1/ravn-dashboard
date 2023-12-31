'use client';

import Button from '@/components/button';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface ButtonsProps {
  onClose: () => void;
  type?: string;
}

const Buttons = ({ onClose, type }: ButtonsProps) => {
  const { pending } = useFormStatus();

  const submitClasses = clsx(
    'text-neutral-1',
    pending && 'bg-primary-2',
    !pending && 'bg-primary-4',
  );

  return (
    <div className="flex justify-end space-x-6">
      <Button className="bg-transparent text-neutral-1" onClick={onClose}>
        Cancel
      </Button>
      <Button className={submitClasses} submit>
        {type === 'create' ? 'Create' : 'Update'}
      </Button>
    </div>
  );
};

export default Buttons;
