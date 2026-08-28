import Terminal from "../components/terminal";

function TerminalPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Terminal />
      <p className="mt-2 shrink-0 font-mono text-sm text-gray-400">
        Type "help" to see the list of available commands.
      </p>
    </div>
  );
}

export default TerminalPage;
