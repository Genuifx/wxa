import { validate } from '../../ts/rules/is_not';

it('checks if the value matches another', () => {
  expect(validate(1, ['1'])).toBe(true);
  expect(validate(1, [1])).toBe(false);
  expect(validate(1)).toBe(true);
  expect(validate({}, [{}])).toBe(true);
  const obj = {};
  expect(validate(obj, [obj])).toBe(false);
});
