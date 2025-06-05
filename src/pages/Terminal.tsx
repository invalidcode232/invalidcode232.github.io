import Terminal from "../components/terminal";

function TerminalPage() {
    return (
        <>
            <Terminal />
            <div className="text-sm text-gray-400 font-mono">
                Type "help" to see the list of available commands.
            </div>
        </>
    );
}

export default TerminalPage;
