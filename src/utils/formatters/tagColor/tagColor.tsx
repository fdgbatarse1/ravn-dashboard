import { TaskTag } from '@/gql/graphql';

/**
 * Maps a `TaskTag` enum value to a corresponding set of CSS class names for styling.
 *
 * This function takes a `TaskTag` enum value as input and returns a string representing CSS class names. These class names
 * are used to style elements according to the tag type. The `TaskTag` enum includes values like `Android`, `Ios`, `NodeJs`,
 * etc., each representing a different technology or platform. The function defines a mapping (`tagColorMap`) where each
 * tag is associated with specific styling classes, allowing for consistent visual representation across an application.
 *
 * @param tag - An instance of the `TaskTag` enum, representing the type of task tag.
 *
 * The `tagColorMap` is an object where keys are `TaskTag` enum values and values are strings of CSS class names.
 * The function retrieves the CSS classes associated with the provided `TaskTag` and returns them. This is particularly
 * useful in UI components where different tags need distinct visual styling based on their type.
 *
 * @returns A string representing CSS class names for the provided `TaskTag` enum value. If the provided enum value does not
 *   exist in the `tagColorMap`, the function will return `undefined`.
 *
 * @example
 * const tagClasses = tagColor(TaskTag.Android);
 * // tagClasses will be 'bg-tertiary-4 text-tertiary-4' for TaskTag.Android.
 *
 * @see TaskTag - The enum type `TaskTag`, representing different types of task tags.
 */
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
