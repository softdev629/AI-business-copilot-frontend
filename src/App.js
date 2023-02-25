// import libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/reset.css";

import PDFChatQA from "./components/chatqa";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PDFChatQA />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
