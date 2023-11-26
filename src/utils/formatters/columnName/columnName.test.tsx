import columnName from './columnName';

describe('columnName', () => {
    it('should replace underscores with spaces and append the number of tasks', () => {
        const text = 'example_text';
        const tasks = 5;
        const expected = 'example text (5)';

        const result = columnName(text, tasks);

        expect(result).toEqual(expected);
    });
});
