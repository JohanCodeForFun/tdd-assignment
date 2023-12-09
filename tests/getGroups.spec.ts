import data from '../data/groups.json';
import { getGroups } from "../src/getGroups";
import { Group } from '../types/group';

describe('test getGroups async function', () => {

  it("return promise of group list", async () => {
    const testFetchedData = await getGroups();
    const result: Group[] = data;

    expect(testFetchedData).toStrictEqual(result);
  });

});