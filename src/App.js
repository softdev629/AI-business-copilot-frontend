// import libraries
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import ChatBox from "./components/chatqa/chatbox";
import TrainPage from "./components/upload";
import LoginForm from "./components/auth/login-form";
import RegisterForm from "./components/auth/register-form";
import EmailVerify from "./components/auth/email-verify";
import { history } from "./utils/history";
import RequireUser from "./components/require-user";
import UsersList from "./components/admin/users-list";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify" element={<EmailVerify />}>
          <Route path=":code" element={<EmailVerify />} />
        </Route>
        <Route element={<RequireUser />}>
          <Route path="/chat/:id" element={<ChatBox type="combine" />} />
          <Route path="/upload/:id" element={<TrainPage />} />
          <Route path="/admin">
            <Route path="users" element={<UsersList />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
