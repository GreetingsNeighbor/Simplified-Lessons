import { promises as fs } from "fs";

/**
 * 
 * @param relativePath - the path to the file relative to the root of the project; e.g. /app/data/Calendar.tsx
 * @returns 
 */
export const readFile = async (relativePath: string) => {
    try {
        const data = await fs.readFile(process.cwd + relativePath, "utf-8");
        //if you want the data in json
        //const dattJson=JSON.parse(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

/**
 * 
 * @param relativePath - the path to the file relative to the root of the project; e.g. /app/data/Calendar.tsx
 * @param data - the data to be written to the file
 * @returns 
 */
export const writeFile = async (relativePath: string, data: string) => {
    try {
        await fs.writeFile(process.cwd + relativePath, data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}