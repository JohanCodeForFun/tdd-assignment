import { isPrime } from "../src/isPrime";

describe('test prime number function', () => {

  it('test if number is prime', () => {
    const test = isPrime(3);
    const result = true;

    expect(test).toBe(result);
  })

  it('test if number is NOT prime', () => {
    const test = isPrime(8);
    const result = false;

    expect(test).toBe(result);
  })
})