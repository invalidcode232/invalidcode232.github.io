"use client";

import { Link } from "react-router";

type Props = {
  href: string;
  text: string;
  isPath?: boolean;
};

export default function NavigationLink(props: Props) {
  return (
    <span>
      <Link
        to={props.href}
        className="text-blue-400 hover:underline mx-2"
        target={props.isPath ? undefined : "_blank"}
      >
        {props.text}
      </Link>
    </span>
  );
}
