export enum Commands {
    HELP = "help",
    CLEAR = "clear",
    ECHO = "echo",
    // other commands
}

export enum OutputHistoryType {
    INFO = "info",
    ERROR = "error",
    SUCCESS = "success",
}

export interface OutputHistory {
    id: string;
    content: string;
    type: OutputHistoryType;
}
