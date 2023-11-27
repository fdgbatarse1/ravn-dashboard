import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';

const dueDateText = (dueDate: string) => {
  const parsedDueDate = parseISO(dueDate);

  if (isToday(parsedDueDate)) return 'Today';
  if (isTomorrow(parsedDueDate)) return 'Tomorrow';
  if (isYesterday(parsedDueDate)) return 'Yesterday';

  return format(parsedDueDate, 'd, MMMM y');
};

export default dueDateText;
