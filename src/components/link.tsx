import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

function PageLink(props: { href: string, external?: boolean, children: React.ReactNode }) {
    return (
        <Link to={props.href} className="text-blue-400 hover:underline no-underline" target={props.external ? "_blank" : undefined} rel={props.external ? "noopener noreferrer" : undefined}>
            {props.children}
            {props.external && (
                <FaExternalLinkAlt className="ml-0.5 inline-block align-super text-[0.6em]" />
            )}
        </Link>
    );
}

export default PageLink;