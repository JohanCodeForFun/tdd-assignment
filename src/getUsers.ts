import { readLocalJsonFile } from "../utils/readLocalJsonFile";
const filePath = 'data/users.json';

export const getUsers= async () => {
    const data = await readLocalJsonFile(filePath);

    return data;
}
