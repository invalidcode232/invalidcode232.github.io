import TFileSystem from "../modules/terminal-fs";
import type { TFile } from "../modules/terminal-fs";

function Projects() {
    return (
        <>
            <h1 className="text-3xl font-semibold text-white mb-2">
                My Projects
            </h1>
            {TFileSystem.map((file: TFile) => (
                <div key={file.name} className="my-4">
                    <h1 className="text-2xl mb-2">
                        {file.name.replace(".md", "")}
                    </h1>
                    <p className="text-gray-400">{file.description}</p>
                </div>
            ))}
        </>
    );
}

export default Projects;
