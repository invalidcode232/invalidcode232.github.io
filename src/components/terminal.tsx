import { useRef, useState } from "react";
import { Commands } from "../modules/terminal-objects";
import TerminalHandler from "../modules/terminal-handler";

export default function Terminal() {
    const PROMPT = "guest@portfolio:~$";

    const [input, setInput] = useState("");
    const [outputHistory, setOutputHistory] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const THandler = new TerminalHandler(setOutputHistory);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;

        const [command, ...args] = input.trim().split(" ");
        THandler.handleCommand({
            command: command as Commands,
            args,
        });
        setInput("");

        inputRef.current!.value = "";
        inputRef.current?.focus();
    };

    return (
        <div className="bg-black rounded-lg p-4 text-gray-200 font-mono">
            {outputHistory.map((output, index) => (
                <div key={index}>{output}</div>
            ))}

            <form className="flex items-center" onSubmit={handleSubmit}>
                <label htmlFor="terminal-input" className="text-gray-400 mr-2">
                    {PROMPT}
                </label>
                <input
                    type="text"
                    name="terminal-input"
                    className="bg-transparent border-none focus:outline-none w-auto"
                    value={input}
                    onChange={handleInputChange}
                    ref={inputRef}
                    autoFocus
                />
            </form>
        </div>
    );
}
