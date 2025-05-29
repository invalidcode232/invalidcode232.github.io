import { Link } from "react-router";

type Props = {
    href: string;
    text: string;
    isPath?: boolean;
    hideMobile?: boolean;
};

export default function NavigationLink(props: Props) {
    return (
        <span>
            <Link
                to={props.href}
                className={`text-blue-400 hover:underline mx-2 hover:cursor-pointer ${
                    props.hideMobile ? "hidden lg:inline-block" : ""
                }`}
                target={props.isPath ? undefined : "_blank"}
            >
                {props.text}
            </Link>
        </span>
    );
}
