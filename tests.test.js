import capitalize from './capitalize';
import reverseString from './reverseString';
import calculator from './calculator';
import caesarCipher from './caesarCipher';
import analyzeArray from './analyzeArray';

test('Capitalizing', () => {
	expect(capitalize('Cat')).toBe('CAT');
});

test('Passing numbers', () => {
	expect(capitalize(123)).toBe('123');
});

test('Reverse string', () => {
	expect(reverseString('Cat')).toBe('taC');
});

test('Add', () => {
	expect(calculator.add(3, 3)).toBe(6);
});

test('Subtract', () => {
	expect(calculator.subtract(3, 3)).toBe(0);
});

test('Divide', () => {
	expect(calculator.divide(3, 3)).toBe(1);
});

test('Multiply', () => {
	expect(calculator.multiply(3, 3)).toBe(9);
});

test('Caesar Cipher', () => {
	expect(caesarCipher('defend the east wall of the castle')).toBe(
		'efgfoe uif fbtu xbmm pg uif dbtumf'
	);
});

test('Caesar Cipher wrapping', () => {
	expect(caesarCipher('z')).toBe('a');
});

test('Caesar Cipher punctuation', () => {
	expect(caesarCipher('abc, de.')).toBe('bcd, ef.');
});

test('Analyze array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
