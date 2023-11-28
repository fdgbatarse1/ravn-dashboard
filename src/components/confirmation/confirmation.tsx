import Button from '../button';

interface ConfirmationProps {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Confirmation = ({ text, onConfirm, onCancel }: ConfirmationProps) => (
  <div className="w-min space-y-4 rounded-lg bg-neutral-3 p-4">
    <p className="whitespace-nowrap text-body-l font-semibold text-neutral-1">{text}</p>
    <div className="flex justify-end">
      <Button
        className="bg-transparent px-4 text-body-m font-semibold text-neutral-1"
        onClick={onCancel}
      >
        No
      </Button>
      <Button
        className="bg-primary-4 px-4 text-body-m font-semibold text-neutral-1"
        onClick={onConfirm}
      >
        Yes
      </Button>
    </div>
  </div>
);

export default Confirmation;
