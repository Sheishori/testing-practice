import capitalize from './capitalize';
import reverseString from './reverseString';

test('Capitalizing', () => {
	expect(capitalize('Cat')).toBe('CAT');
});

test('Passing numbers', () => {
	expect(capitalize(123)).toBe('123');
});

test('Reverse string', () => {
	expect(reverseString('Cat')).toBe('taC');
});
