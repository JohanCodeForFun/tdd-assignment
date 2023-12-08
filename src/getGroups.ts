import { readLocalJsonFile } from "../utils/readLocalJsonFile";
const filePath = 'data/groups.json';

export const getGroups = async () => {
    const data = await readLocalJsonFile(filePath);

    return data;
}
