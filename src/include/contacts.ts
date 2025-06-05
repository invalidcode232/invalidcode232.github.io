export interface Contact {
  name: string;
  text: string;
  href: string;
}

const CONTACTS: Contact[] = [
  {
    name: "Mail",
    text: "mail@invalidcode.me",
    href: "mailto:mail@invalidcode.me",
  },
  {
    name: "Linkedin",
    text: "James Sungarda",
    href: "https://www.linkedin.com/in/james-sungarda/",
  }
];

export default CONTACTS; 