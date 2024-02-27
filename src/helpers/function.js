import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
export const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "abdulazisabduraimov@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
