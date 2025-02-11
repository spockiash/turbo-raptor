import { Application, Router } from "@oak/oak";
import { displayBanner, displayStartupMessage } from "./consoleUtils.ts"
import { generateFakeStockData } from "./dataService.ts"

const PROTOCOL:string = "HTTP"
const PORT: number = 8000;
const HOST: string = "localhost";

displayBanner();
displayStartupMessage(PROTOCOL, HOST, PORT);

const router = new Router()
    .get("/api/fakeData", (ctx) => {
        ctx.response.body = generateFakeStockData("ETHUSDT", "1h");
    });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ hostname: HOST, port: PORT });