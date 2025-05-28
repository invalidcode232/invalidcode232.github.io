import { Link } from "react-router";
import NavigationLink from "../components/navigation-link.tsx";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center mb-10 text-white">
      <span className="text-3xl inline-block align-middle">
        <Link to="/">James Sungarda</Link>
      </span>
      <div>
        <NavigationLink href={"/projects"} text={"Projects"} isPath />
        <NavigationLink
          href={"https://github.com/invalidcode232"}
          text={"Github"}
        />
        <NavigationLink
          href={"https://www.linkedin.com/in/james-sungarda/"}
          text={"Linkedin"}
        />
      </div>
    </div>
  );
}
