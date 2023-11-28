import ErrorType from '@/data/enums/error';
import ErrorMessage from './errorMessage';

describe('ErrorMessage', () => {
  it('should return the provided error message if it is a valid error message', () => {
    const result1 = ErrorMessage(ErrorType.GetTasks);
    expect(result1).toEqual(ErrorType.GetTasks);

    const result2 = ErrorMessage(ErrorType.GetUsers);
    expect(result2).toEqual(ErrorType.GetUsers);
  });

  it('should return the default error message if the provided error message is not a valid error message', () => {
    const result = ErrorMessage('INVALID_INPUT');
    expect(result).toEqual('Oops! Something went wrong.');
  });
});
