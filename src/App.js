// import libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import ChatBox from "./components/chatqa/chatbox";
import TrainPage from "./components/upload";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat/:id" element={<ChatBox type="combine" />} />
          <Route path="/upload/:id" element={<TrainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
