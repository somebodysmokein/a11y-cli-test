import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // After successful login:
    onLogin();
    navigate("/dashboard"); // navigate to Dashboard route
  };

  const NativeModal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  // Syncing the native dialog state with React props
  if (isOpen && !dialogRef.current?.open) {
    dialogRef.current?.showModal(); // showModal handles focus trapping automatically
  } else if (!isOpen && dialogRef.current?.open) {
    dialogRef.current?.close();
  }
  };



  return (
    <div
      id="main-container"
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
      data-testid="app-root"
      role="main"
    >      

    <img src="/logo.png" className="absolute top-10 left-10 w-20 h-20" alt="Login App Logo" />
    
      <div
        id="login-card"
        className="backdrop-blur-md bg-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/30"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white drop-shadow-md">
          Welcome Back
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-sm font-semibold text-white">
              Username
            </label>
            <input
              type="text"
              className="border border-white/40 rounded-lg px-4 py-2 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              id="username"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-semibold text-white">
              Password
            </label>
            <input
              type="password"
              className="border border-white/40 rounded-lg px-4 py-2 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"     
              id="password"         
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold rounded-lg py-2 shadow-md hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
