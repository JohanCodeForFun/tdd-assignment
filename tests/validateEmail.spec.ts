import { isValidEmail } from "../src/validateEmail";

describe('hello', () => {

  it('test valid email to be true', () => {
    const test = isValidEmail("jonatan@gmail.com");
    const result = true

    expect(test).toBe(result);
  });
  
  it('return false if email missing top level domain (ex .com)', () => {
    const test = isValidEmail("jonatan@gmail");
    const result = false

    expect(test).toBe(result);
  });

  it('return false if @ symbol is  missing in email', () => {
    const test = isValidEmail("jonatan.com");
    const result = false

    expect(test).toBe(result);
  });

});