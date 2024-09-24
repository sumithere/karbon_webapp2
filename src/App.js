import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
