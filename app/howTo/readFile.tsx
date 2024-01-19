import { promises as fs } from "fs";

/**
 * 
 * @param filename - the filename with it's path; relative to the root of the project; e.g. /app/data/calendar.json
 * @returns 
 */
export const readFile = async (filename: string) => {
    try {
        const data = await fs.readFile(process.cwd + filename, "utf-8");
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
 * @param filename - the filename with it's path; relative to the root of the project; e.g. /app/data/calendar.json
 * @param data - the data to be written to the file
 * @returns 
 */
export const writeFile = async (filename: string, data: string) => {
    try {
        await fs.writeFile(process.cwd + filename, data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}