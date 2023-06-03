import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoutes = ({ roles, Component }) => {
  const { role } = useSelector((state) => state.auth);
  const isUserHasAccess = role && roles.includes(role);

  if (!!isUserHasAccess) return <Navigate to="/" />;
  return Component;
};
