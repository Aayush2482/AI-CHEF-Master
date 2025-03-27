import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check for stored user data in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authToken");
    if (storedUser) {
      // Ideally, you'd want to fetch user info with the token from an API
      // Here's a simplified example where we assume user info is stored in localStorage
      const decodedUser = JSON.parse(localStorage.getItem("userInfo"));
      setUser(decodedUser);
    }
  }, []);

  // Handle login by setting user data and storing auth token
  function login(tokenData, email, role = "customer") {
    const userInfo = { email, role, tokenData };
    localStorage.setItem("authToken", tokenData.accessToken); // Save the token
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Save the user info
    setUser(userInfo);
  }

  // Handle signup (simplified, usually you'd interact with an API here)
  function signup(email, role = "customer") {
    const userInfo = { email, role };
    setUser(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Save the user info
  }

  // Logout function to clear user data and token
  function logout() {
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
