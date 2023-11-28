import { TaskTag } from '@/gql/graphql';
import tagColor from './tagColor';

describe('tagColor', () => {
  it('should return yello colors for android', () => {
    expect(tagColor(TaskTag.Android)).toBe('bg-tertiary-4 text-tertiary-4');
  });
  it('should return green colors for ios', () => {
    expect(tagColor(TaskTag.Ios)).toBe('bg-secondary-4 text-secondary-4');
  });
  it('should return neutral colors for nodejs', () => {
    expect(tagColor(TaskTag.NodeJs)).toBe('bg-neutral-2 text-neutral-1');
  });
  it('should return red colors for rails', () => {
    expect(tagColor(TaskTag.Rails)).toBe('bg-primary-4 text-primary-4');
  });
  it('should return blue colors for react', () => {
    expect(tagColor(TaskTag.React)).toBe('bg-[#2F61BF] text-[#2F61BF]');
  });
});
