import { parseISO, differenceInDays } from 'date-fns';

/**
 * Determines the status of a due date by comparing it with the current date and returns the appropriate style class.
 *
 * This function takes a due date as a string in ISO format and calculates the difference in days between the current
 * date and the due date. Based on this difference, it returns a string that represents CSS class names for styling
 * purposes. The function uses `parseISO` and `differenceInDays` from 'date-fns' to parse the due date and calculate
 * the difference in days, respectively.
 *
 * @param dueDate - A string representing the due date in ISO format (e.g., '2023-04-15T00:00:00Z').
 *
 * The function first converts the current date and the due date string into Date objects. It then calculates the
 * difference in days between these two dates. Depending on the number of days until the due date (positive for past
 * dates, negative for future dates), the function returns different strings representing CSS classes. These classes
 * are used for applying different background and text color styles to represent the status of the due date
 * (e.g., overdue, upcoming, or normal).
 *
 * @returns A string representing CSS class names, indicating the status of the due date. The possible return values are:
 *   - 'bg-primary-4 text-primary-4 bg-opacity-10' for past due dates.
 *   - 'bg-neutral-2 text-neutral-1 bg-opacity-10' for due dates more than 2 days in the future.
 *   - 'bg-tertiary-4 text-tertiary-4 bg-opacity-10' for all other cases.
 *
 * @example
 * const statusClass = dueDateStatus('2023-04-15T00:00:00Z');
 * // If the current date is past April 15, 2023, statusClass will be 'bg-primary-4 text-primary-4 bg-opacity-10'.
 * // If the current date is before April 13, 2023, statusClass will be 'bg-neutral-2 text-neutral-1 bg-opacity-10'.
 * // For any other date, it will be 'bg-tertiary-4 text-tertiary-4 bg-opacity-10'.
 *
 * @see parseISO, differenceInDays from 'date-fns' for parsing dates and calculating the difference in days.
 */
const dueDateStatus = (dueDate: string) => {
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

export default dueDateStatus;
