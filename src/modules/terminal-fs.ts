import timeblockrContent from "../include/terminal-files/project-timeblockr.md?raw";

interface TFile {
    name: string;
    content: string;
    description?: string;
}

const TFileSystem: TFile[] = [
    {
        name: "timeblockr.md",
        content: timeblockrContent,
    }
]

export default TFileSystem;
export type { TFile };