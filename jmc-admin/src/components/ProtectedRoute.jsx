import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Check if user is authenticated
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
