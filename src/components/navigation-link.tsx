"use client";

type Props = {
  href: string;
  text: string;
};

export default function NavigationLink(props: Props) {
  return (
    <span>
      <a
        href={props.href}
        className="text-blue-400 hover:underline mx-2"
        target="_blank"
      >
        {props.text}
      </a>
    </span>
  );
}
