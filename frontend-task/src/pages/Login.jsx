
import Card from "../components/Card";
import InputField from "../components/InputField";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError(null);

    try {
      const BASEURL = import.meta.env.VITE_BASEURL
      const response = await fetch(BASEURL + "user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const userInfo = { tokenData: data.data, email };
      const role = email === "admin@123" ? "admin" : "customer"
      login(userInfo.tokenData, email, role);
      if (role === "admin") {
        navigate("/dashboard", { state: { userInfo } });
      } else {
        navigate("/", { state: { userInfo } });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center text-2xl font-extrabold text-black mb-1 pb-3">
            Login Page
          </div>
          <div className="flex justify-center pb-2 font-semibold">
            Don't have an account?
            <NavLink to="/signup" className="px-2 underline">
              SignUp
            </NavLink>
          </div>
          <InputField
            header="Email Address"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            header="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <div className="mt-10 font-bold text-gray-500">
            <div>Dummy accout</div>
            <div>email : user1@gmail.com</div>
            <div>passowrd : 123456</div>
          </div>
        </form>
      </div>
      <div className="bg-logo hidden md:block">
        <Card />
      </div>
    </div>
  );
}