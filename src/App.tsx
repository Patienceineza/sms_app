import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./views/Login";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import Dashbord from "./views/Dashbord";
import Register from "./views/Register";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Toaster position="top-right" />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashbord />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
