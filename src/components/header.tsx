import { Link } from "react-router";
import NavigationLink from "../components/navigation-link.tsx";

export default function Header() {
    return (
        <header className="mb-10 flex w-full shrink-0 items-center justify-between text-white">
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
                <NavigationLink href={"/about"} text={"About"} isPath />
            </nav>
        </header>
    );
}
