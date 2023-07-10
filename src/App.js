import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard.html">
          <Dashboard />
        </Route>
        <Route path="/login.html">
          <Login />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

