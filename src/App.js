import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './components/sign-up/Signup';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
