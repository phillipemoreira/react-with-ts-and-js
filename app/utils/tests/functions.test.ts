import { sum } from '../functions';

describe('Sum', () => {
  it('should sum two numbers', () => {
    expect(sum(40, 2)).toEqual(42);
  });
});
