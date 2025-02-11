import { RouterContext } from "@oak/oak";
import { readStockFile, listStockFiles } from "../services/fileService.ts"
import { logInfo } from "../utils.ts";


export const getStockFile = async (
    ctx: RouterContext<"/api/files/stockdata/:filename">
  ) => {
    try {
      const { filename } = ctx.params;
      if (!filename) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Filename is required" };
        return;
      }
  
      const data = await readStockFile(filename);
      ctx.response.status = 200;
      ctx.response.body = { data };
      logInfo(`Served file ${filename}`);
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : "An unknown error occurred";
      ctx.response.status = 500;
      ctx.response.body = { error: errMessage };
    }
  };

export const getStockFilesList = async (
    ctx: RouterContext<"/api/files/stockdata/list">
    ) => {
        try {
            const data = await listStockFiles();
            ctx.response.status = 200;
            ctx.response.body = { data };
        } catch (error) {
            const errMessage = error instanceof Error ? error.message : "An unknown error occurred";
            ctx.response.status = 500;
            ctx.response.body = { error: errMessage };
        }
    };