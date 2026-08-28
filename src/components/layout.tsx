import { Outlet } from "react-router";
import Header from "./header";
import PageLink from "./link";

export default function Layout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-900">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-8 py-8 md:px-12 md:py-10 2xl:max-w-4xl 2xl:pt-12">
        <Header />
        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto leading-relaxed text-gray-200">
          <Outlet />
        </main>
        <footer className="shrink-0 pt-4 font-mono text-xs text-gray-400 md:pt-0">
          © {new Date().getFullYear()} {" "}
          <PageLink
            href="/"
          >
            James Sungarda
          </PageLink>
          {" | "}
          <PageLink
            href="https://github.com/invalidcode232/invalidcode232.github.io"
            external={true}
          >
            View on GitHub
          </PageLink>
        </footer>
      </div>
    </div>
  );
}
