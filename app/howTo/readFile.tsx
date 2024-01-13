import { promises as fs } from "fs";
//add descripton for the readFile function

/**
 * 
 * @param relativePath - the path to the file relative to the root of the project; e.g. /src/components/Calendar.tsx
 * @returns 
 */
export const readFile = async (relativePath: string) => {
    try {
        const data = await fs.readFile(process.cwd + relativePath, "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}