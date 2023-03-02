// import libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import PDFUpload from "./components/chatqa/pdf-upload-dom";
import ChatBox from "./components/chatqa/chatbox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/upload/:id" element={<PDFUpload />} />
          <Route path="/chat/:id" element={<ChatBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
