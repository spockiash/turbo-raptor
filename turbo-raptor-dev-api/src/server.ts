import { Application, Router, Context } from "@oak/oak";
import chalk from "chalk";
import figlet from "figlet";
import { displayBanner, displayStartupMessage } from "./consoleUtils.ts"

const PROTOCOL:string = "HTTP"
const PORT: number = 8000;
const HOST: string = "localhost";

displayBanner();
displayStartupMessage(PROTOCOL, HOST, PORT);