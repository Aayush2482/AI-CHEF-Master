import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="bg-blue-100 text-Black p-4 flex justify-between"> 
      <Link to="/" className="text-White text-lg font-bold">The Perfume Lab</Link>
      <div>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/about" className="px-2">About</Link>
        {user ? (
          <>
            {user.role === "admin" && <Link to="/dashboard" className="px-2">Dashboard</Link>}
            <button onClick={handleLogout} className="ml-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-2">Login</Link>
            <Link to="/signup" className="px-2">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
