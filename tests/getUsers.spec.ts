import data from '../data/users.json';
import { getUsers } from "../src/getUsers";
import { User } from '../types/user';

describe('test getUsers async function', () => {

  it("return promise of user list", async () => {
    const testFetchedData = await getUsers();
    const result: User[] = data;

    expect(testFetchedData).toStrictEqual(result);
  });

});