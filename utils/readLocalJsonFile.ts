import * as fs from 'fs';
import { APIResponse } from '../types/APIResponse';

export function readLocalJsonFile<T>(filePath: string): APIResponse<T> {
  try {
    // Read the content of the JSON file synchronously
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON content
    const jsonData = JSON.parse(fileContent) as APIResponse<T>;

    return jsonData;
  } catch (error) {
    if (error instanceof Error) {
      throw { error: error.message };
    } else {
      throw { error: 'Unexpected error occurred.' };
    }
  };
};