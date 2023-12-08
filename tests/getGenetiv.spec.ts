import { getGenitive } from "../src/getGenetiv";

describe('test genetiv function', () => {

  it('test if function adds s to name', () => {
    const test1 = getGenitive("Jonatan")
    const test2 = getGenitive("Johanna")
    const test3 = getGenitive("Anna")
    
    const result1 = "Jonatans";
    const result2 = "Johannas";
    const result3 = "Annas";

    expect(test1).toBe(result1);
    expect(test2).toBe(result2);
    expect(test3).toBe(result3);
  })

  it('if name ends with s, do not add additional s', () => {
    const test1 = getGenitive("Claes")
    const test2 = getGenitive("Hampus")

    const result1 = "Claes";
    const result2 = "Hampus";

    expect(test1).toBe(result1);
    expect(test2).toBe(result2);
  })

})