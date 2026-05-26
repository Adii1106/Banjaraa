import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const demoUser = {
    email: "DemoUser",
    password: "Banjara123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (
      email === demoUser.email &&
      password === demoUser.password
    ) {
      console.log("Login Successful");
      alert("Welcome! ,Have a great Journey ahead!")

      navigate("/dashboard");

    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="bg-blue-200 p-8 rounded-sm shadow-lg w-96">

        <h1 className="text-black text-3xl font-italic mb-6 text-center">
          Login
        </h1>

        <p>Username</p>

        <input
          type="email"
          className="w-full p-3 mb-4 rounded bg-blue-100"
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Password</p>

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-blue-100"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mb-4 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-violet-300 hover:bg-blue-400 p-3 rounded"
        >
          Login
        </button>

        <p className="text-center mt-6">

          <Link
            to="/signup"
            className="text-indigo-800 hover:text-indigo-500"
          >
            Need an Account? Sign Up
          </Link>

        </p>
      <div className="text-gray-500 mx-16 mt-4">
        <p >
        UserName: DemoUser</p><p>
        password: Banjara123
        </p>
        </div>
      </div>
    </div>
  );
}