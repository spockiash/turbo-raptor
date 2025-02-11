import { Application, Router } from "@oak/oak";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts"; // ✅ Import CORS middleware
import { displayBanner, displayStartupMessage } from "./consoleUtils.ts";
import { generateFakeStockData } from "./dataService.ts";
import { getStockFile, getStockFilesList } from "./api/fileApi.ts";

const PROTOCOL: string = "HTTP";
const PORT: number = 8000;
const HOST: string = "localhost";

displayBanner();
displayStartupMessage(PROTOCOL, HOST, PORT);

const router = new Router()
  .get("/api/files/stockdata/list", getStockFilesList)
  .get("/api/files/stockdata/:filename", getStockFile)
  .get("/api/fakeData", (ctx) => {
    ctx.response.body = generateFakeStockData("ETHUSDT", "1h");
  });

const app = new Application();

// ✅ Enable CORS
app.use(oakCors({ origin: "*" })); // Allows all origins

// ✅ Add routes & methods
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ hostname: HOST, port: PORT });
console.log(`🚀 Server running on http://${HOST}:${PORT}`);
