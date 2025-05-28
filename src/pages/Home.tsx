import CONTACTS, { Contact } from "../contacts";

function Home() {
  return (
    <>
      <div>
        <span className="text-3xl font-semibold inline-block mr-3 text-white">
          Hello!
        </span>
        <span className="text-md mb-2 text-gray-400 inline-block">
          Halo / 你好 / こんにちは
        </span>
      </div>
      <div>
        <p>
          I am currently a first year undergraduate student studying Computer
          Science at The University of Hong Kong.
        </p>

        <h3>Contact me</h3>
        <ul>
          {CONTACTS.map((contact: Contact) => (
            <li key={contact.name}>
              {contact.name}: <a href={contact.href}>{contact.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home; 