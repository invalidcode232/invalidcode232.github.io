import { Commands } from "./terminal-objects";

export interface TerminalInput {
    command: Commands;
    args: string[];
}

class TerminalHandler {
    setOutputHistory: React.Dispatch<React.SetStateAction<string[]>>;

    constructor(
        setOutputHistory: React.Dispatch<React.SetStateAction<string[]>>,
    ) {
        this.setOutputHistory = setOutputHistory;
    }

    private appendOutput(output: string) {
        this.setOutputHistory((outputs) => [...outputs, output]);
    }

    handleCommand(input: TerminalInput) {
        const { command, args } = input;

        switch (command) {
            case Commands.HELP:
                this.appendOutput("Available commands: help, clear, echo");
                break;
            case Commands.CLEAR:
                this.setOutputHistory([]);
                break;
            case Commands.ECHO:
                if (args.length === 0) {
                    this.appendOutput("Usage: echo <message>");
                } else {
                    this.appendOutput(args.join(" "));
                }

                break;
            default:
                this.appendOutput(`Unknown command: ${command}`);
                break;
        }
    }
}

export default TerminalHandler;
