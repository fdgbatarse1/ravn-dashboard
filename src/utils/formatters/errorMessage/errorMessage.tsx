import ErrorType from '@/data/enums/error';

/**
 * Evaluates an error message and returns a formatted error string.
 *
 * This function takes a string `message`, which is expected to be an error message, and checks if it is one of the values
 * defined in the `ErrorType` enum. If the message matches one of the enum values, it returns the message as is.
 * Otherwise, it returns a default error message: 'Oops! Something went wrong.'. This is useful for handling and displaying
 * error messages in a user interface, ensuring that only predefined error messages or a standard fallback message are shown.
 *
 * @param message - A string representing the error message. This could be a direct message or a key corresponding to
 *   an entry in the `ErrorType` enum.
 *
 * The function uses `Object.values` to create an array of the values in the `ErrorType` enum and then checks if the
 * provided `message` is included in this array. If it is, the function assumes the message is a valid error message
 * and returns it. If not, it returns the default error message.
 *
 * @returns A string that is either the provided error message (if it matches an `ErrorType` value) or a default error
 *   message ('Oops! Something went wrong.').
 *
 * @example
 * const error = ErrorMessage('INVALID_INPUT');
 * // If 'INVALID_INPUT' is a value in ErrorType, error will be 'INVALID_INPUT'.
 * // If 'INVALID_INPUT' is not a value in ErrorType, error will be 'Oops! Something went wrong.'
 *
 * @see ErrorType - An enum of predefined error message types.
 */
const ErrorMessage = (message: string) => {
  if (Object.values(ErrorType).includes(message as ErrorType)) return message;
  return 'Oops! Something went wrong.';
};

export default ErrorMessage;
