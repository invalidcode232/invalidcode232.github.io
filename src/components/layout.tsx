import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
    return (
        <div className="h-screen overflow-scroll py-10 2xl:px-72 2xl:pt-20 xl:px-20 xl:pt-16 lg:px-20 md:px-20 px-8 pt-14 flex flex-col bg-slate-900">
            <Header />
            <main className="text-gray-200 h-full flex-1">
                <Outlet />
            </main>
            <footer className="text-sm text-gray-400 font-mono">
                © {new Date().getFullYear()}
                <a
                    href="https://github.com/invalidcode232/invalidcode232.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline hover:text-blue-400 mx-2"
                >
                    James Sungarda
                </a>
                |
                <a
                    href="https://github.com/invalidcode232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline hover:text-blue-400 mx-2"
                >
                    GitHub
                </a>
            </footer>
        </div>
    );
}
