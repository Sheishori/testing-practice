import capitalize from './capitalize';
import reverseString from './reverseString';
import calculator from './calculator';

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
