import dueDateStatus from './dueDateStatus';

describe('dueDateStatus', () => {
  it('should return bg-primary-4 text-primary-4 bg-opacity-10 for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString();
    const result = dueDateStatus(formattedYesterday);
    expect(result).toBe('bg-primary-4 text-primary-4 bg-opacity-10');
  });
  it('should return bg-tertiary-4 text-tertiary-4 bg-opacity-10 for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString();
    const result = dueDateStatus(formattedTomorrow);
    expect(result).toBe('bg-tertiary-4 text-tertiary-4 bg-opacity-10');
  });
  it('should return bg-neutral-2 text-neutral-1 bg-opacity-10 for 3 days from now', () => {
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
    const formattedThreeDaysFromNow = threeDaysFromNow.toISOString();
    const result = dueDateStatus(formattedThreeDaysFromNow);
    expect(result).toBe('bg-neutral-2 text-neutral-1 bg-opacity-10');
  });
});
