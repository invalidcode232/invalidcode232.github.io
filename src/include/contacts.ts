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
    text: "mail@sungardajames.com",
    href: "mailto:mail@sungardajames.com",
  },
];

export default CONTACTS; 
