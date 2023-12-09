import { readLocalJsonFile } from "../utils/readLocalJsonFile";
import { User } from "../types/user";
const filePath = 'data/users.json';

export const getUsers= async (): Promise<User[]> => {
    const data = await readLocalJsonFile<User[]>(filePath);

    return data;
}
