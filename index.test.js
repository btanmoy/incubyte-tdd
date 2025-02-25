//  test

const add = require('./index');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number itself if only one number is provided', () => {
    expect(add("5")).toBe(5);
});

test('adds two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

test('handles custom delimiters of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});
