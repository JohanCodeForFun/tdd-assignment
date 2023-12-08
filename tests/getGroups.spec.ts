import data from '../data/groups.json';
import { getGroups } from "../src/getGroups";

describe('test getGroups async function', () => {

  it("return promise of group list", async () => {
    const testFetchedData = await getGroups();
    const result = data;

    expect(testFetchedData).toStrictEqual(result);
  });

});