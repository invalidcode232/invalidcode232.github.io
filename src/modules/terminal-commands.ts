import TFileSystem from "./terminal-fs";
import {
  Commands,
  HELP_TEXT,
  OutputHistoryType,
  SYSTEM_MESSAGE,
} from "./terminal-objects";

export type CommandResult =
  | { action: "clear" }
  | { action: "print"; content: string; type: OutputHistoryType };

export function executeCommand(input: string): CommandResult {
  const [command, ...args] = input.trim().split(" ");

  switch (command) {
    case Commands.HELP:
      return {
        action: "print",
        content: HELP_TEXT,
        type: OutputHistoryType.INFO,
      };

    case Commands.CLEAR:
      return { action: "clear" };

    case Commands.ECHO:
      if (args.length === 0) {
        return {
          action: "print",
          content: "Usage: echo <message>",
          type: OutputHistoryType.ERROR,
        };
      }
      return {
        action: "print",
        content: args.join(" "),
        type: OutputHistoryType.INFO,
      };

    case Commands.SYSTEM:
      return {
        action: "print",
        content: SYSTEM_MESSAGE,
        type: OutputHistoryType.INFO,
      };

    case Commands.LS:
      return {
        action: "print",
        content: TFileSystem.map((file) => file.name).join("\n"),
        type: OutputHistoryType.INFO,
      };

    case Commands.CAT: {
      if (args.length === 0) {
        return {
          action: "print",
          content: "Usage: cat <file>",
          type: OutputHistoryType.ERROR,
        };
      }

      const file = TFileSystem.find((entry) => entry.name === args[0]);
      if (!file) {
        return {
          action: "print",
          content: `File not found: ${args[0]}`,
          type: OutputHistoryType.ERROR,
        };
      }

      return {
        action: "print",
        content: file.content,
        type: OutputHistoryType.INFO,
      };
    }

    default:
      return {
        action: "print",
        content: `Unknown command: ${command}`,
        type: OutputHistoryType.ERROR,
      };
  }
}
