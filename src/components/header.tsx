import { Link } from "react-router";
import NavigationLink from "../components/navigation-link.tsx";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center mb-10 text-white">
            <span className="text-3xl inline-block align-middle">
                <Link to="/">James Sungarda</Link>
            </span>
            <nav>
                <NavigationLink
                    href={"/terminal"}
                    text={"Terminal"}
                    isPath
                    hideMobile
                />
                <NavigationLink href={"/projects"} text={"Projects"} isPath />
            </nav>
        </header>
    );
}
