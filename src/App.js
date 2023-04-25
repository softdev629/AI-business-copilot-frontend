// import libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import ChatBox from "./components/chatqa/chatbox";
import TrainPage from "./components/upload";
import LoginForm from "./components/auth/login-form";
import RegisterForm from "./components/auth/register-form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/chat/:id" element={<ChatBox type="combine" />} />
          <Route path="/upload/:id" element={<TrainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
