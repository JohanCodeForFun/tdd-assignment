import { isLowerCase } from "../src/isLowerCase";

describe('test isLowerCase function', () => {

  it('test if input is only lowercase', () => {
    const testString = isLowerCase("abcde");
    const result = true;

    expect(testString).toBe(result);
    
  });
  it('return false if input has uppercase', () => {
    const testString = isLowerCase("aBCDe");
    const result = false;
    
    expect(testString).toBe(result);
  });
});