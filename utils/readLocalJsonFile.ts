import * as fs from 'fs';
import { User } from '../types/user';

export function readLocalJsonFile(filePath: string): User[] {
  try {
    // Read the content of the JSON file synchronously
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON content
    const jsonData = JSON.parse(fileContent);

    return jsonData;
  } catch (error: any) {
    console.error(`Error reading JSON file: ${error.message}`);
    throw error;
  }
}