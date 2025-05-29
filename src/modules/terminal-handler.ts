import SYSTEM_MESSAGE, {
    Commands,
    OutputHistory,
    OutputHistoryType,
} from "./terminal-objects";

export interface TerminalInput {
    command: Commands;
    args: string[];
}

class TerminalHandler {
    setOutputHistory: React.Dispatch<React.SetStateAction<OutputHistory[]>>;

    constructor(
        setOutputHistory: React.Dispatch<React.SetStateAction<OutputHistory[]>>,
    ) {
        this.setOutputHistory = setOutputHistory;
    }

    private addOutput(
        prompt: string | null,
        content: string,
        type: OutputHistoryType = OutputHistoryType.INFO,
    ) {
        const newOutput: OutputHistory = {
            id: crypto.randomUUID(),
            prompt,
            content,
            type,
        };

        this.setOutputHistory((outputs) => [...outputs, newOutput]);
    }

    sendSystemMessage() {
        this.addOutput(null, SYSTEM_MESSAGE);
    }

    handleCommand(input: string) {
        const [command, ...args] = input.trim().split(" ");

        switch (command) {
            case Commands.HELP:
                this.addOutput(
                    input,
                    "Available commands: help, clear, echo, system",
                );
                break;
            case Commands.CLEAR:
                this.setOutputHistory([]);
                break;
            case Commands.ECHO:
                if (args.length === 0) {
                    this.addOutput(input, "Usage: echo <message>");
                } else {
                    this.addOutput(input, args.join(" "));
                }

                break;
            case Commands.SYSTEM:
                this.addOutput(input, SYSTEM_MESSAGE);
                break;
            default:
                this.addOutput(input, `Unknown command: ${command}`);
                break;
        }
    }
}

export default TerminalHandler;
