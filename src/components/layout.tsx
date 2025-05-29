import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
    return (
        <div className="min-h-screen bg-slate-900 2xl:px-80 2xl:pt-20 xl:px-64 xl:pt-16 lg:px-40 md:px-32 px-10 pt-14">
            <Header />
            <main className="text-gray-200">
                <Outlet />
            </main>
        </div>
    );
}
