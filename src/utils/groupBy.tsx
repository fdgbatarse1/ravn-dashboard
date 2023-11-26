interface GroupByProps<T, K> {
  array: T[];
  fn: (item: T) => K;
}

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
