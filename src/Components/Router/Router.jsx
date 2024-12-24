// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../Login/Login";
import Login from "../Signup/Signup"
import Home from "../Home/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Signup />} />
                <Route path="/signup" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
