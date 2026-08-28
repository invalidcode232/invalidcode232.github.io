import { FaEnvelope, FaFile } from "react-icons/fa6";
import CONTACTS, { Contact } from "../include/contacts";
import ActionButton from "../components/action-button";
import PageLink from "../components/link";

function Home() {
    return (
        <>
            <section className="mb-2 flex flex-col items-center md:block" aria-label="greeting">
                <h1 className="text-3xl font-semibold inline-block mr-3 text-white">Hello!</h1>
                <h2 className="text-md mb-2 text-gray-400 inline-block">Halo / 你好 / こんにちは</h2>
            </section>

            <section
                className="mb-4 text-center leading-relaxed flex flex-col gap-y-4 md:text-left"
                aria-label="introduction"
            >
                <p >
                    I am currently a junior year undergraduate student studying Computer Science at{" "}
                    <PageLink
                        href={"https://hku.hk"}
                        external={true}
                    >
                            The University of Hong Kong
                    </PageLink>
                    .
                </p>

                <p>
                    I am interested in all things software development, as well as machine learning, data
                    science, and web development.
                </p>
            </section>

            <section className="flex flex-col gap-y-2 mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">Other Stuff</h2>
                <p>
                    I maintain <PageLink href="https://blog.sungardajames.com" external={true}>coffee_thoughts</PageLink>, my personal blog containing thoughts and essays on various topics.
                </p>

                <p>
                    Feel free to explore my{" "}
                    <PageLink href="/terminal">interactive terminal</PageLink>
                    .
                </p>
            </section>

            <section className="flex flex-col items-center mb-6 md:flex-row md:items-center md:justify-start">
                <ActionButton
                    text="Download CV"
                    href="https://github.com/invalidcode232/invalidcode232.github.io/raw/refs/heads/main/public/cv.pdf"
                    icon={<FaFile />}
                />
                <span className="text-gray-500 md:mx-4 md:block hidden">or</span>
                <ActionButton
                    text="Email me"
                    href="mailto:mail@sungardajames.com"
                    icon={<FaEnvelope />}
                    mailto={true}
                />
            </section>

            <section aria-label="contact" className="md:block flex flex-col items-center">
                <h2 className="text-xl font-semibold text-white mb-2">Contact me</h2>

                <ul>
                    {CONTACTS.map((contact: Contact) => (
                        <li key={contact.name} className="mb-1 flex items-center">
                            <contact.icon className="mr-3 text-xl" />
                            <a
                                href={contact.href}
                                className="text-blue-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
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
