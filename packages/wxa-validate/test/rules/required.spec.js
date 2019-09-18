import { validate } from '../../ts/rules/required';

const valid = [
  'asjdj',
  0,
  'undefined',
  'null',
  's ',
  true,
  false
];

const invalid = [
  '',
  ' ',
  [],
  undefined,
  null
];

it('validates required', () => {
  expect.assertions(12);
  valid.forEach(value => expect(validate(value)).toBe(true));

  invalid.forEach(value => expect(validate(value)).toBe(false));
});

it('false value can be invalidated', () => {
  expect(validate(false)).toBe(true);
  expect(validate(false, [true])).toBe(false);
});
