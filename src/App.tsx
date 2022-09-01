import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Example1 from "./example1";
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
          </ul>
        </nav>

        <Routes>
          <Route path="/example1" element={<Example1 />} />
        </Routes>
      </div>
    </Router>
  );
}
