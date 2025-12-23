import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { mainContext } from "../context/MainContext";

function ProtectedRoute() {
  const {state}=useContext(mainContext)
  if (!state.user) {
   return  <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
