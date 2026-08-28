export enum Commands {
  HELP = "help",
  CLEAR = "clear",
  ECHO = "echo",
  SYSTEM = "system",
  LS = "ls",
  CAT = "cat",
}

export enum OutputHistoryType {
  INFO = "info",
  ERROR = "error",
  SUCCESS = "success",
}

export interface OutputHistory {
  id: number;
  content: string;
  type: OutputHistoryType;
  prompt: string | null;
}

export const TERMINAL_PROMPT = "guest@portfolio:~$";

export const SYSTEM_MESSAGE = `Welcome to the terminal interface of my portfolio!
You can interact with it using various commands.

Type 'help' to see the list of available commands.`;

export const HELP_TEXT = `Available commands:
  help              Show this list of commands
  clear             Clear the terminal
  echo <message>    Print a message
  system            Show the welcome message
  ls                List files
  cat <file>        Print a file's contents`;
