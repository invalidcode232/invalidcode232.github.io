import Terminal from "../components/terminal";
import CONTACTS, { Contact } from "../include/contacts";

function Home() {
    return (
        <>
            <section className="mb-2" aria-label="greeting">
                <h1 className="text-3xl font-semibold inline-block mr-3 text-white">
                    Hello!
                </h1>
                <h2 className="text-md mb-2 text-gray-400 inline-block">
                    Halo / 你好 / こんにちは
                </h2>
            </section>

            <section className="mb-4" aria-label="introduction">
                <p className="prose text-gray-200">
                    I am currently a first year undergraduate student studying
                    Computer Science at The University of Hong Kong.
                </p>
            </section>

            <section aria-label="contact" className="mb-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Contact me
                </h2>

                <ul>
                    {CONTACTS.map((contact: Contact) => (
                        <li key={contact.name}>
                            {contact.name}:{" "}
                            <a href={contact.href} className="text-blue-400">
                                {contact.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <Terminal />
        </>
    );
}

export default Home;
