import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import Link from 'next/link';

import Label from '@/components/label';

interface SettingsProps {
  id: string;
}

const Settings = ({ id }: SettingsProps) => (
  <div className="absolute right-0 top-10 w-min space-y-2 rounded-lg border border-solid border-neutral-2 bg-neutral-3 p-4">
    <Link href={`?modal=true&type=update&id=${id}`}>
      <Label
        text="Edit"
        className="bg-neutral-3 text-neutral-1"
        icon={<RiPencilLine size="24px" />}
      />
    </Link>
    <Link href={`?modal=true&type=delete&id=${id}`}>
      <Label
        text="Delete"
        className="bg-neutral-3 text-neutral-1"
        icon={<RiDeleteBin6Line size="24px" />}
      />
    </Link>
  </div>
);

export default Settings;
