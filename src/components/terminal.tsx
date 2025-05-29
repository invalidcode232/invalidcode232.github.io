import { useMemo, useRef, useState, useEffect } from "react";
import { OutputHistory } from "../modules/terminal-objects";
import TerminalHandler from "../modules/terminal-handler";

export default function Terminal() {
    const PROMPT = "guest@portfolio:~$";

    const [input, setInput] = useState("");
    const [outputHistory, setOutputHistory] = useState<OutputHistory[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const outputContainerRef = useRef<HTMLDivElement>(null);

    const THandler = useMemo(() => {
        const handler = new TerminalHandler(setOutputHistory);
        handler.sendSystemMessage();
        return handler;
    }, []);

    useEffect(() => {
        if (outputContainerRef.current) {
            outputContainerRef.current.scrollTop =
                outputContainerRef.current.scrollHeight;
        }
    }, [outputHistory]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;

        THandler.handleCommand(input);
        setInput("");

        inputRef.current!.value = "";
        inputRef.current?.focus();
    };

    return (
        <div className="bg-black rounded-lg p-4 text-sm text-gray-200 font-mono mb-4 flex flex-col h-full">
            <div
                ref={outputContainerRef}
                className="flex-1 overflow-y-auto mb-2"
            >
                {outputHistory.map((output) => (
                    <div key={output.id} className="py-2">
                        {output.prompt !== null && (
                            <span className="block font-semibold">
                                <span className="text-orange-400">{">"}</span>{" "}
                                {output.prompt}
                            </span>
                        )}
                        <span className="whitespace-pre-wrap">
                            {output.content}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex-shrink-0">
                <label
                    htmlFor="terminal-input"
                    className="text-gray-400 mr-2 w-auto"
                >
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
