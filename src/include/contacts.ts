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
    name: "Matrix",
    text: "@invalidcode:matrix.org",
    href: "https://matrix.to/#/@invalidcode:matrix.org",
  },
];

export default CONTACTS; 