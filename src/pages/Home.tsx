import { FaEnvelope, FaFile } from "react-icons/fa6";
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

            <section className="my-8 flex flex-col items-center md:flex-row md:items-center md:justify-start">
                <a
                    className="bg-slate-700 text-white px-6 py-2 rounded-md md:min-w-[200px] min-w-full hover:bg-slate-600 hover:cursor-pointer flex items-center justify-center mb-3 md:mb-0"
                    aria-label="download cv"
                    href="https://github.com/invalidcode232/invalidcode232.github.io/raw/refs/heads/main/public/cv.pdf"
                    target="_blank"
                >
                    <FaFile className="mr-2" />
                    Download CV
                </a>
                <span className="text-gray-500 md:mx-4 md:block hidden">
                    or
                </span>
                <a
                    className="bg-slate-700 text-white px-6 py-2 rounded-md md:min-w-[200px] min-w-full hover:bg-slate-600 hover:cursor-pointer flex items-center justify-center"
                    aria-label="download cv"
                    href="mailto:mail@invalidcode.me"
                >
                    <FaEnvelope className="mr-2" />
                    Email me
                </a>
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
