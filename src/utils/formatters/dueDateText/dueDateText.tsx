import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';

/**
 * Converts a due date string into a human-readable text format.
 *
 * This function takes a string representing a due date in ISO format and converts it into a more human-readable form.
 * It uses the `parseISO` function from 'date-fns' to parse the input string into a Date object. It then checks if
 * this date represents today, tomorrow, or yesterday using the `isToday`, `isTomorrow`, and `isYesterday` functions
 * from 'date-fns', respectively. If the date corresponds to one of these, it returns a string ('Today', 'Tomorrow',
 * or 'Yesterday') accordingly. If the date does not match any of these, it formats the date into a more standard
 * readable format (e.g., '15, April 2023') using the `format` function from 'date-fns'.
 *
 * @param dueDate - A string representing the due date in ISO format (e.g., '2023-04-15T00:00:00Z').
 *
 * The function first parses the ISO string into a Date object. It then evaluates whether the date is today, tomorrow,
 * or yesterday, returning the corresponding string. If none of these conditions are met, it formats the date into
 * a standard readable format.
 *
 * @returns A string that represents the due date in a human-readable form. This could be 'Today', 'Tomorrow',
 * 'Yesterday', or a formatted date string like '15, April 2023'.
 *
 * @example
 * const text = dueDateText('2023-04-15T07:30:42.413Z');
 * // If the current date is April 15, 2023, text will be 'Today'.
 * // If the current date is April 14, 2023, text will be 'Tomorrow'.
 * // If the current date is April 16, 2023, text will be 'Yesterday'.
 * // For any other date, it will be formatted as '15, April 2023'.
 *
 * @see parseISO, isToday, isTomorrow, isYesterday, format from 'date-fns' for parsing and formatting dates.
 */
const dueDateText = (dueDate: string) => {
  const parsedDueDate = parseISO(dueDate);

  if (isToday(parsedDueDate)) return 'Today';
  if (isTomorrow(parsedDueDate)) return 'Tomorrow';
  if (isYesterday(parsedDueDate)) return 'Yesterday';

  return format(parsedDueDate, 'd, MMMM y');
};

export default dueDateText;
