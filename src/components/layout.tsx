import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-900 lg:px-96 lg:pt-20 px-10 pt-16">
      <Header />
      <main className="prose prose-p:text-gray-200 prose-h3:text-gray-100 prose-a:text-blue-400 prose-li:text-gray-100">
        <Outlet />
      </main>
    </div>
  );
} 