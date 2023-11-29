import dueDateText from './dueDateText';

describe('dueDateText', () => {
  it('should return "Today" when the due date is today', () => {
    const today = new Date();
    const formattedToday = today.toISOString();
    const result = dueDateText(formattedToday);
    expect(result).toBe('Today');
  });

  it('should return "Tomorrow" when the due date is tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString();
    const result = dueDateText(formattedTomorrow);
    expect(result).toBe('Tomorrow');
  });

  it('should return "Yesterday" when the due date is yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString();
    const result = dueDateText(formattedYesterday);
    expect(result).toBe('Yesterday');
  });

  it('should return the formatted date when the due date is neither today, tomorrow, nor yesterday', () => {
    const customDate = new Date('2022-01-01T07:30:42.413Z');
    const formattedCustomDate = customDate.toISOString();
    const result = dueDateText(formattedCustomDate);
    expect(result).toBe('1, January 2022');
  });
});
