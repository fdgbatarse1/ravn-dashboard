import { TaskTag } from '@/gql/graphql';

const tagColor = (tag: TaskTag) => {
  const tagColorMap = {
    [TaskTag.Android]: 'bg-tertiary-4 text-tertiary-4',
    [TaskTag.Ios]: 'bg-secondary-4 text-secondary-4',
    [TaskTag.NodeJs]: 'bg-neutral-2 text-neutral-1',
    [TaskTag.Rails]: 'bg-primary-4 text-primary-4',
    [TaskTag.React]: 'bg-[#2F61BF] text-[#2F61BF]',
  };

  return tagColorMap[tag];
};
export default tagColor;
