import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container mx-auto px-5 py-10 py-32 text-center">
          <h1 className="text-4xl text-black">
            React Dropdown with TailwindCSS
          </h1>
          <h2 className="text-gray-700">
            Originally designed and ported from{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://tailwindui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindUI
            </a>{" "}
            and built with{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
          </h2>
          <div className="py-10">
            <Dropdown>
              <ul className="divide-y">
                <li className="hover:bg-gray-300 py-3">Item 1</li>
                <li className="hover:bg-gray-300 py-3">Item 2</li>
                <li className="hover:bg-gray-300 py-3">Item 3</li>
                <li className="hover:bg-gray-300 py-3">Item 4</li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
