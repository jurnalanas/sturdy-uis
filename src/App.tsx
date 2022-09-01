import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Example1 from "./example1";
import Example1End from "./example2";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="inline">
            <li>
              <Link to="/example1">Example 1</Link>
            </li>
            <li>
              <Link to="/example1-end">Example 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example1-end" element={<Example1End />} />
        </Routes>
      </div>
    </Router>
  );
}
