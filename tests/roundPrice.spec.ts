import { roundPrice } from "../src/roundPrice";

describe('test round price function', () => {

  it('test for price rounded up and with two decimals', () => {
    const test = roundPrice(232.10542);
    const result = "232.11 SEK"

    expect(test).toBe(result);
  });
  
  it('test that price function adds two decimals for price', () => {
    const test = roundPrice(14);
    const result = "14.00 SEK"

    expect(test).toBe(result);
  });

  it('test that price function rounds down to nearest two decimal number', () => {
    const test = roundPrice(1024.2048);
    const result = "1024.20 SEK"

    expect(test).toBe(result);
  });

    it('test for price rounded up and with two decimals', () => {
      const test = roundPrice(232.10542, '%PRICE% kr');
      const result = "232.11 kr"
  
      expect(test).toBe(result);
    });
    
    it('test that price function adds two decimals for price', () => {
      const test = roundPrice(14, '$%PRICE%');
      const result = "$14.00"
  
      expect(test).toBe(result);
    });
  
    it('test that price function rounds down to nearest two decimal number', () => {
      const test = roundPrice(1024.2048, 'USD %PRICE%');
      const result = "USD 1024.20 SEK"
  
      expect(test).toBe(result);
    });
    
});