import groupBy from './groupBy';

describe('groupBy', () => {
  it('should group items correctly', () => {
    const array = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Jane' },
    ];

    const result = groupBy({
      array,
      fn: (item) => item.name,
    });

    expect(result).toEqual({
      John: [
        { id: 1, name: 'John' },
        { id: 3, name: 'John' },
      ],
      Jane: [
        { id: 2, name: 'Jane' },
        { id: 4, name: 'Jane' },
      ],
    });
  });
});
