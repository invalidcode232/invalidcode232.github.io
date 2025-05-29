import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
    return (
        <div className="min-h-screen py-10 2xl:px-72 2xl:pt-20 xl:px-60 xl:pt-16 lg:px-40 md:px-32 px-8 pt-14 flex flex-col bg-slate-900">
            <Header />
            <main className="text-gray-200 flex-1">
                <Outlet />
            </main>
        </div>
    );
}
