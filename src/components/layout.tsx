import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
  return (
    <div className="h-dvh overflow-x-hidden overflow-y-auto bg-slate-900">
      <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-8 py-8 md:px-12 md:py-10 2xl:max-w-4xl 2xl:pt-12">
        <Header />
        <main className="min-h-0 flex-1 leading-relaxed text-gray-200">
          <Outlet />
        </main>
        <footer className="pt-4 font-mono text-sm text-gray-400 md:pt-0">
          © {new Date().getFullYear()}
          <a
            href="https://www.linkedin.com/in/james-sungarda/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-300 hover:text-blue-400 hover:underline"
          >
            James Sungarda
          </a>
          |
          <a
            href="https://github.com/invalidcode232/invalidcode232.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-300 hover:text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
