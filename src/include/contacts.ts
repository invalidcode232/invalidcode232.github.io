import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Contact {
  name: string;
  icon: IconType;
  text: string;
  href: string;
}

const CONTACTS: Contact[] = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    text: "James Sungarda",
    href: "https://www.linkedin.com/in/james-sungarda/",
  },
  {
    name: "Github",
    icon: FaGithub,
    text: "invalidcode232",
    href: "https://github.com/invalidcode232",
  },
  {
    name: "Mail",
    icon: FaEnvelope,
    text: "mail@invalidcode.me",
    href: "mailto:mail@invalidcode.me",
  },
];

export default CONTACTS; 