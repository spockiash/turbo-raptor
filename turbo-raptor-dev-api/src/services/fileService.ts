import { logInfo, logError } from "../utils.ts";
import { join } from "https://deno.land/std@0.223.0/path/mod.ts"; // Use `join` for cross-platform path handling

// Dynamically determine the absolute path to Data/StockSamples
const BASE_PATH = join(Deno.cwd(), "Data", "StockSamples");

export const readStockFile = async (filename: string): Promise<string> => {
    try {
        // Check if the directory exists
        try {
            await Deno.stat(BASE_PATH);
        } catch {
            logError(`❌ Error: Base path does not exist -> ${BASE_PATH}`);
            throw new Error(`Base directory not found: ${BASE_PATH}`);
        }

        const filePath = join(BASE_PATH, filename);
        logInfo(`📄 Reading file from absolute path: ${filePath}`);

        const data = await Deno.readTextFile(filePath);
        return data;
    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "An unknown error occurred";
        logError(`❌ Error reading file: ${errMessage}`);
        throw new Error(`Failed to read file: ${filename}`);
    }
};

export const listStockFiles = async (): Promise<string[]> => {
    try {
        // Check if the directory exists
        try {
            await Deno.stat(BASE_PATH);
        } catch {
            logError(`❌ Error: Base path does not exist -> ${BASE_PATH}`);
            throw new Error(`Base directory not found: ${BASE_PATH}`);
        }

        logInfo(`📂 Listing files in directory: ${BASE_PATH}`);

        const files: string[] = [];

        for await (const entry of Deno.readDir(BASE_PATH)) {
            if (entry.isFile) {
                files.push(entry.name); // Collect file names
            }
        }

        return files;
    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "An unknown error occurred";
        logError(`❌ Error listing files: ${errMessage}`);
        throw new Error("Failed to list stock files");
    }
};