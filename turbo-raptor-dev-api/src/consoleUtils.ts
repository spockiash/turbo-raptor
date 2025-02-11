import chalk from "chalk";
import figlet from "figlet";
import { getTimeStamp } from "./utils.ts";

export function displayBanner(): void {
  console.clear(); // Clear console before displaying banner

  // Generate ASCII text
  const bannerText: string = figlet.textSync("TURBO-RAPTOR", {
      font: "ANSI Shadow", // Choose a fancy figlet font
      horizontalLayout: "default",
      verticalLayout: "default",
  });

  // Creating a flag-like effect using chalk styles
  const styledBanner: string = bannerText
      .split("\n")
      .map((line: string, index: number): string =>
          index % 2 === 0
              ? chalk.green.bold(line) // Green stripes
              : chalk.white.bold(line) // White stripes
      )
      .join("\n");

  // Add a solid black background with padding
  console.log(
      chalk.bgBlack("\n" + styledBanner + "\n") // Adds spacing for a cleaner look
  );
}

export function displayStartupMessage(protocol: string, host: string, port: number): void {
    console.log("\n" + chalk.green.bold("🚀 Starting Turbo-Raptor Service..."));
    console.log(
        chalk.green.bold(`📡 Running on: ${protocol}://${host}:${port}`)
    );
    console.log(chalk.green.bold("🦖 Ready!"));
}
