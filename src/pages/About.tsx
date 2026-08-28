// import TFileSystem from "../modules/terminal-fs";
// import type { TFile } from "../modules/terminal-fs";

import PageLink from "../components/link";

function About() {
    return (
        <>
            <h1 className="text-4xl font-bold text-white mb-4">
                About
            </h1>
            {/* <h1 className="text-2xl text-white font-semibold mb-2">Projects</h1> */}
            {/* {TFileSystem.map((file: TFile) => (
                <div key={file.name} className="my-4">
                    <h1 className="text-2xl mb-2">
                        {file.name.replace(".md", "")}
                    </h1>
                    <p className="text-gray-400">{file.description}</p>
                </div>
            ))} */}
            <h1 className="text-2xl text-white font-semibold mb-2">WIP</h1>
            <h2>In the meantime, my <PageLink href="https://blog.sungardajames.com" external={true}>blog</PageLink> contains more information about me and my personal thoughts.</h2>
        </>
    );
}

export default About;
