'use strict';

const math = require('./math');
const sum = math.sum;
const multiply = math.multiply;

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1,2)).toBe(3);
});

test('multiplies 3 and 4 to equal 12', () => {
	expect(multiply(3, 4)).toBe(12);
});
