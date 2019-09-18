import { validate } from '../../ts/rules/ext';
import helpers from '../helpers';

it('validates files extensions', () => {
  const params = ['txt', 'jpg', 'svg'];
  const validFiles = [
    helpers.file('file.txt', 'text/plain'),
    helpers.file('file.jpg', 'image/jpeg'),
    helpers.file('file.svg', 'image/svg'),
  ];

  expect(validate(validFiles, params)).toBe(true);
  expect(validate([helpers.file('file.pdf', 'application/pdf')], params)).toBe(false);
});
