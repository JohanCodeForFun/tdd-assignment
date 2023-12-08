import { makeHeading } from "../src/createHTMLHeading";

describe('test makeHeading function', () => {

  it('test for h1 heading', () => {
    const test = makeHeading("Hello", 1);
    const result = "<h1>Hello</h1>"

    expect(test).toBe(result);
  });
  
  it('test for h2 heading', () => {
    const test = makeHeading("Next level", 2);
    const result = "<h2>Next level</h2>"

    expect(test).toBe(result);
  });

  it('return error on invalid heading', () => {

    expect(() => makeHeading("Hello world!", 7)).toThrow(Error);
  });

});