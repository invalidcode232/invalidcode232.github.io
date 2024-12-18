import "./App.css";
import Header from "./components/header";

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
            I am currently a first year undergraduate student studying Bachelor
            of Engineering at The University of Hong Kong.
          </p>

          <h3>Contact me</h3>
          <ul>
            <li>
              Mail: <a href="mailto:mail@invalidcode.me">mail@invalidcode.me</a>
            </li>
            <li>
              Matrix:{" "}
              <a href="https://matrix.to/#/@invalidcode:matrix.org">
                @invalidcode:matrix.org
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default App;
