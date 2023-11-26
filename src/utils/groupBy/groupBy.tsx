/**
 * Defines the properties for the `groupBy` function.
 *
 * This interface is used to type the parameter for the `groupBy` function. It includes two properties:
 * - `array`: An array of elements of type `T`. This is the array that will be grouped by the `groupBy` function.
 * - `fn`: A function that takes an element of type `T` and returns a key of type `K`. This function is used to determine
 *   how the elements in `array` are grouped. The returned key can be of type string, number, or symbol.
 *
 * @typeparam T - The type of elements in the array to be grouped.
 * @typeparam K - The type of the key used for grouping, extending string, number, or symbol.
 */
interface GroupByProps<T, K> {
  array: T[];
  fn: (item: T) => K;
}

/**
 * Groups elements of an array based on a provided criterion.
 *
 * The `groupBy` function takes an object of type `GroupByProps<T, K>`, where `T` is the type of array elements
 * and `K` extends string, number, or symbol, representing the type of the key that will be used for grouping.
 *
 * @param GroupByProps - An object containing two properties:
 *    - `array`: An array of type `T[]`, which is the array to be grouped.
 *    - `fn`: A function of type `(item: T) => K` which takes an element of the array and returns a key of type `K`.
 *      This function determines how the array is grouped.
 *
 * The function works by iterating over each item in the array and applying the function `fn` to obtain a key.
 * It then groups the items by this key. If the key already exists in the accumulator, the item is added to the existing group;
 * otherwise, a new group is created.
 *
 * @returns A `Record<K, T[]>`, which is an object with keys of type `K` and values which are arrays of items grouped by these keys.
 *
 * @example
 * const pets = [
 *   { type: 'dog', name: 'Max' },
 *   { type: 'cat', name: 'Kiki' },
 *   { type: 'dog', name: 'Fido' }
 * ];
 *
 * const groupedByType = groupBy({
 *   array: pets,
 *   fn: (pet) => pet.type
 * });
 *
 * // groupedByType will be:
 * // {
 * //   dog: [{ type: 'dog', name: 'Max' }, { type: 'dog', name: 'Fido' }],
 * //   cat: [{ type: 'cat', name: 'Kiki' }]
 * // }
 *
 * @typeparam T - The type of elements in the array to be grouped.
 * @typeparam K - The type of the key used for grouping, which extends string, number, or symbol.
 */
const groupBy = <T, K extends string | number | symbol>({ array, fn }: GroupByProps<T, K>) =>
  array.reduce(
    (accum, item) => {
      const key = fn(item);
      const newAccum = {
        ...accum,
        [key]: accum[key] ? [...accum[key], item] : [item],
      };
      return newAccum;
    },
    {} as Record<K, T[]>,
  );

export default groupBy;
