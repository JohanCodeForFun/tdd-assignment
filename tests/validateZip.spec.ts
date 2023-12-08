import { isValidZip } from "../src/validateZip";

describe('hello', () => {

  it('test valid zip to be five numbers', () => {
    const test = isValidZip('12345');
    const result = true

    expect(test).toBe(result);
  });
  
  it('return false if zip is less than five numbers', () => {
    const test = isValidZip('1234');
    const result = false

    expect(test).toBe(result);
  });

  it('return false if zip is more than five numbers', () => {
    const test = isValidZip('123456');
    const result = false

    expect(test).toBe(result);
  });

  it('return false if zip is not numbers', () => {
    const test = isValidZip('abcde');
    const result = false

    expect(test).toBe(result);
  });

});