import "./App.css";
import Header from "./components/header";

const CONTACTS = [
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

function App() {
  return (
    <>
      <div className="h-screen bg-slate-900 lg:px-96 lg:pt-20 px-10 pt-16">
        <Header />
        <div>
          <span className="text-3xl font-semibold inline-block mr-3 text-white">
            Hello!
          </span>
          <span className="text-md mb-2 text-gray-400 inline-block">
            Halo / 你好 / こんにちは
          </span>
        </div>
        <article className="prose prose-p:text-gray-200 prose-h3:text-gray-100 prose-a:text-blue-400 prose-li:text-gray-100">
          <p>
            I am currently a first year undergraduate student studying Computer
            Science at The University of Hong Kong.
          </p>

          <h3>Contact me</h3>
          <ul>
            {CONTACTS.map((contact) => (
              <li key={contact.name}>
                {contact.name}: <a href={contact.href}>{contact.text}</a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

export default App;
