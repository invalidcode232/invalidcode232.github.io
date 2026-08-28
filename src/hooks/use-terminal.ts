import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { executeCommand } from "../modules/terminal-commands";
import {
  OutputHistory,
  OutputHistoryType,
  SYSTEM_MESSAGE,
} from "../modules/terminal-objects";

let nextOutputId = 0;

function createOutputId() {
  nextOutputId += 1;
  return nextOutputId;
}

function createLine(
  prompt: string | null,
  content: string,
  type: OutputHistoryType = OutputHistoryType.INFO,
): OutputHistory {
  return {
    id: createOutputId(),
    prompt,
    content,
    type,
  };
}

export function useTerminal() {
  const [history, setHistory] = useState<OutputHistory[]>(() => [
    createLine(null, SYSTEM_MESSAGE),
  ]);
  const [input, setInput] = useState("");
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [historyCursor, setHistoryCursor] = useState(-1);
  const [draftInput, setDraftInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const output = outputRef.current;
    if (!output) return;
    output.scrollTop = output.scrollHeight;
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const clearScreen = () => {
    setHistory([]);
  };

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (trimmed === "") return;

    setPastCommands((commands) => [...commands, trimmed]);
    setHistoryCursor(-1);
    setDraftInput("");

    const result = executeCommand(trimmed);

    if (result.action === "clear") {
      clearScreen();
      return;
    }

    setHistory((lines) => [
      ...lines,
      createLine(trimmed, result.content, result.type),
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    if (historyCursor !== -1) {
      setHistoryCursor(-1);
      setDraftInput("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearScreen();
      return;
    }

    if (event.key === "ArrowUp") {
      if (pastCommands.length === 0) return;
      event.preventDefault();

      const nextIndex =
        historyCursor === -1
          ? pastCommands.length - 1
          : Math.max(0, historyCursor - 1);

      if (historyCursor === -1) {
        setDraftInput(input);
      }

      setHistoryCursor(nextIndex);
      setInput(pastCommands[nextIndex] ?? "");
      return;
    }

    if (event.key === "ArrowDown") {
      if (historyCursor === -1) return;
      event.preventDefault();

      const nextIndex = historyCursor + 1;
      if (nextIndex >= pastCommands.length) {
        setHistoryCursor(-1);
        setInput(draftInput);
        return;
      }

      setHistoryCursor(nextIndex);
      setInput(pastCommands[nextIndex] ?? "");
    }
  };

  const focusInput = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    inputRef.current?.focus();
  };

  return {
    history,
    input,
    inputRef,
    outputRef,
    handleSubmit,
    handleInputChange,
    handleKeyDown,
    focusInput,
  };
}
