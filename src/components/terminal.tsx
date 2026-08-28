import { useTerminal } from "../hooks/use-terminal";
import {
  OutputHistoryType,
  TERMINAL_PROMPT,
} from "../modules/terminal-objects";

const OUTPUT_TYPE_CLASS: Record<OutputHistoryType, string> = {
  [OutputHistoryType.INFO]: "text-gray-200",
  [OutputHistoryType.ERROR]: "text-red-400",
  [OutputHistoryType.SUCCESS]: "text-green-400",
};

export default function Terminal() {
  const {
    history,
    input,
    inputRef,
    outputRef,
    handleSubmit,
    handleInputChange,
    handleKeyDown,
    focusInput,
  } = useTerminal();

  return (
    <div
      className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg bg-black p-4 font-mono text-sm text-gray-200"
      onClick={focusInput}
    >
      <div
        ref={outputRef}
        className="min-h-0 flex-1 overflow-y-auto"
        aria-live="polite"
      >
        {history.map((entry) => (
          <div key={entry.id} className="py-1">
            {entry.prompt !== null && (
              <div className="font-semibold">
                <span className="text-orange-400">{TERMINAL_PROMPT}</span>{" "}
                <span>{entry.prompt}</span>
              </div>
            )}
            {entry.content !== "" && (
              <pre
                className={`whitespace-pre-wrap ${OUTPUT_TYPE_CLASS[entry.type]}`}
              >
                {entry.content}
              </pre>
            )}
          </div>
        ))}

        <form
          onSubmit={handleSubmit}
          className="flex w-full min-w-0 items-center gap-2 py-1"
        >
          <label
            htmlFor="terminal-input"
            className="shrink-0 font-semibold text-orange-400"
          >
            {TERMINAL_PROMPT}
          </label>
          <input
            id="terminal-input"
            type="text"
            name="terminal-input"
            className="min-w-0 flex-1 border-none bg-transparent text-white caret-white outline-none"
            value={input}
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}
