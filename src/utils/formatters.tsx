import { parseISO, differenceInDays } from 'date-fns';

const getStatusFromDueDate = (dueDate: string) => {
  const currentDate = new Date();
  const parsedDueDate = parseISO(dueDate);
  const days = differenceInDays(currentDate, parsedDueDate);

  if (days > 0) {
    return 'bg-primary-4 text-primary-4 bg-opacity-10';
  }

  if (days < -2) {
    return 'bg-neutral-2 text-neutral-1 bg-opacity-10';
  }

  return 'bg-tertiary-4 text-tertiary-4 bg-opacity-10';
};

export { getStatusFromDueDate };

export default {};
