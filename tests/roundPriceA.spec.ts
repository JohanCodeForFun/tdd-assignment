import { roundPriceA } from "../src/roundPriceA";

describe('test round price function', () => {

  it('test for price rounded up and with two decimals', () => {
    const test = roundPriceA(232.10542);
    const result = "232.11 SEK"

    expect(test).toBe(result);
  });
  
  it('test that price function adds two decimals for price', () => {
    const test = roundPriceA(14);
    const result = "14.00 SEK"

    expect(test).toBe(result);
  });

  it('test that price function rounds down to nearest two decimal number', () => {
    const test = roundPriceA(1024.2048);
    const result = "1024.20 SEK"

    expect(test).toBe(result);
  });

});