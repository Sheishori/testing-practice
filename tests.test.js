import capitalize from './capitalize';

test('Capitalizing', () => {
	expect(capitalize('Cat')).toBe('CAT');
});

test('Passing numbers', () => {
	expect(capitalize(123)).toBe('123');
});
