import { readLocalJsonFile } from "../utils/readLocalJsonFile";
import { Group } from "../types/group";
const filePath = 'data/groups.json';

export const getGroups = async (): Promise<Group[]> => {
    const data = await readLocalJsonFile<Group[]>(filePath);

    return data;
}
