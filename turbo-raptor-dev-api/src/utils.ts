import chalk from "chalk";


export function logInfo(message: string) {
    const timestamp = `[${getTimeStamp()}]`;
    const infoIcon = "🛈 ";

    console.log(
        chalk.reset( // Ensures clean output
            chalk.hex("#FFFFFF").bold(timestamp) + " " + 
            chalk.cyan(infoIcon) + " " + 
            chalk.white(message)
        )
    );
}

export function getTimeStamp(): string {
    const now = new Date();
    
    const datePart = now.toLocaleString('en-GB', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    }).replace(', ', '::'); // Convert ',' to ':'

    const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); // Ensure 3 digits

    return `${datePart}.${milliseconds}`; // Append milliseconds to timestamp
}
