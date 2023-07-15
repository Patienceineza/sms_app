import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import './index.css';
import Dashbord from './views/Dashbord';
import Users from './views/Users';
import SendSms from './views/SendMessages';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">{}</header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/send-message" element={<SendSms />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
