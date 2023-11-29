/**
 * Generates a formatted column name by modifying an input string and appending the number of tasks.
 *
 * This function takes a string and a number as inputs. The string typically represents a column name in a format where
 * underscores are used instead of spaces (e.g., 'in_progress'). The function replaces all underscores in the input string
 * with spaces, creating a more human-readable format. It then appends the number of tasks, enclosed in parentheses,
 * to this formatted string. This is useful in contexts like task boards or project management tools, where such formatted
 * column names are displayed with a count of tasks/items.
 *
 * @param text - A string representing the original column name, where underscores are used instead of spaces.
 * @param tasks - A number representing the count of tasks or items in that column.
 *
 * The function uses the `String.prototype.replace` method to replace all occurrences of underscores with spaces.
 * It then concatenates this formatted string with the `tasks` parameter, enclosed in parentheses.
 *
 * @returns A formatted string which is the human-readable column name with the number of tasks appended.
 *   For example, if the inputs are 'in_progress' and 5, the output will be 'in progress (5)'.
 *
 * @example
 * const result = columnName('to_do', 3);
 * // result will be 'to do (3)'
 */
const columnName = (text: string, tasks: number) => `${text.replace('_', ' ')} (${tasks})`;

export default columnName;
