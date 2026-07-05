import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutMe from "./pages/Projects";
import Home from "./pages/Home";
import Layout from "./components/layout";
import "./index.css";
import TerminalPage from "./pages/Terminal";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/terminal" element={<TerminalPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
