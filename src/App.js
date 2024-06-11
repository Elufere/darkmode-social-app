import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Profile } from "./pages/profile/Profile";
import { AuthContext } from "./context/authContext";



function App() {
    const {currentUser} = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route path="/" element={currentUser ? <Home /> : <Login />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile/:id" element={<Profile />}/>
            </Routes>
        </Router>
    );
}

export default App;