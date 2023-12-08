import data from '../data/users.json';
import { getUsers } from "../src/getUsers";

describe('test getUsers async function', () => {

  it("return promise of user list", async () => {
    const testFetchedData = await getUsers();
    const result = data;

    expect(testFetchedData).toStrictEqual(result);
  });

});