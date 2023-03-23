// import libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import PDFUpload from "./components/chatqa/pdf-upload-dom";
import ChatBox from "./components/chatqa/chatbox";
import YoutubeLinkDom from "./components/chatqa/youtube-link-dom";
import RetrainDom from "./components/chatqa/retrain-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pdf">
            <Route path="upload/:id" element={<PDFUpload />} />
            <Route path="chat/:id" element={<ChatBox type="pdf" />} />
            <Route path="retrain/:id" element={<RetrainDom type="pdf" />} />
          </Route>
          <Route path="/youtube">
            <Route path="upload/:id" element={<YoutubeLinkDom />} />
            <Route path="chat/:id" element={<ChatBox type="youtube" />} />
            <Route path="retrain/:id" element={<RetrainDom type="youtube" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
