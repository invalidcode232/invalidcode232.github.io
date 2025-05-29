import CONTACTS, { Contact } from "../include/contacts";
import { Link } from "react-router";

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

            <section
                className="mb-4 leading-6 lg:max-w-[75%]"
                aria-label="introduction"
            >
                <p className="mb-2">
                    I am currently a first year undergraduate student studying
                    Computer Science at
                    <a
                        href={"https://hku.hk"}
                        className="text-blue-400 no-underline hover:underline ml-1"
                        target="_blank"
                    >
                        The University of Hong Kong
                    </a>
                    .
                </p>

                <p className="mb-4">
                    I am interested in all things software development,
                    including machine learning, artificial intelligence, and web
                    development.
                </p>

                <p>
                    Want to know more about me? Check out my{" "}
                    <Link
                        to="/terminal"
                        className="text-blue-400 hover:underline no-underline"
                    >
                        interactive terminal
                    </Link>
                    .
                </p>
            </section>

            <section className="my-8">
                <button
                    className="bg-slate-700 mr-4 text-white px-6 py-2 rounded-md min-w-[150px] hover:bg-slate-600 hover:cursor-pointer"
                    aria-label="download cv"
                >
                    Download CV
                </button>
                <span className="text-gray-500">or</span>
                <button
                    className="bg-slate-700 ml-4 text-white px-6 py-2 rounded-md min-w-[150px] hover:bg-slate-600 hover:cursor-pointer"
                    aria-label="download cv"
                >
                    Email me
                </button>
            </section>

            <section aria-label="contact">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Contact me
                </h2>

                <ul>
                    {CONTACTS.map((contact: Contact) => (
                        <li key={contact.name} className="mb-1">
                            {contact.name}:{" "}
                            <a
                                href={contact.href}
                                className="text-blue-400 hover:underline"
                            >
                                {contact.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Home;
