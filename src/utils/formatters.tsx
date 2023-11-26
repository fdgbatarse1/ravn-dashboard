import { format, isToday, isTomorrow, isYesterday, parseISO, differenceInDays } from 'date-fns';

const convertDueDateToText = (dueDate: string) => {
  const parsedDueDate = parseISO(dueDate);

  if (isToday(parsedDueDate)) return 'Today';
  if (isTomorrow(parsedDueDate)) return 'Tomorrow';
  if (isYesterday(parsedDueDate)) return 'Yesterday';

  return format(parsedDueDate, 'd, MMMM y');
};

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

export { convertDueDateToText, getStatusFromDueDate };

export default {};
